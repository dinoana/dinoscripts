// ==UserScript==
// @name         dinoscope
// @namespace    https://github.com/dinoana
// @version      0.0.5
// @description  rawwwrrrrr.. none can hide from dino!!!
// @author       angyydino
// @run-at       document-start
// @require      https://update.greasyfork.org/scripts/478491/1377223/splix-js-demodularizer.js
// @match        https://splix.io/
// @icon         https://avatars.githubusercontent.com/u/189983996
// @grant        none
// ==/UserScript==


(() => {
    'use strict';
    const $$_dino = window.$$_dino ||= {};

    const real_drawPlayer = window.drawPlayer;
    localStorage.hidePlayerNames = 'true';
    let byed = false;

    window.drawPlayer = (ctx, player, timeStamp) => {
        const zoom = window.$$_dino?.zoom ?? 1;
        const honkTimer = player.honkTimer;
        real_drawPlayer(ctx, player, timeStamp);

        if (player.hasReceivedPosition) {
            if (honkTimer < player.honkMaxTime) {
                ctx.beginPath();
                ctx.globalAlpha = window.clamp01(window.iLerp(player.honkMaxTime, 0, player.honkTimer));
                ctx.arc(
                    player.drawPos[0] * 10 + 4.5 + 0.3,
                    player.drawPos[1] * 10 + 4.5 + 0.3,
                    6 + player.honkTimer * 0.1,
                    0,
                    2 * Math.PI,
                    false,
                );
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 3;
                ctx.stroke();
                ctx.globalAlpha = 1;
            };

            const font_size = (256.957 * zoom + 692.349) / (131.711 * zoom + 15.400);
            ctx.font = `${font_size}px Arial`;
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';

            if (!player.isMyPlayer || (player.isMyPlayer && window.wsOnOpenTime && Date.now() - window.wsOnOpenTime < 3000)) {
                ctx.fillText(
                    player.name,
                    player.drawPos[0] * 10 + 4.5,
                    player.drawPos[1] * 10 + 4.5 - 10,
                );
            }

            ctx.beginPath();
            ctx.lineWidth = Math.max(1, 2 / zoom / window.zoom);
            ctx.strokeStyle = 'black';
            ctx.arc(
                player.drawPos[0] * 10 + 4.5,
                player.drawPos[1] * 10 + 4.5,
                6,
                0,
                Math.PI * 2,
            );
            ctx.stroke();
        };

        window.addEventListener('beforeunload', (e) => {
            if (byed) return;
            console.log('dino say bieee')
            localStorage.hidePlayerNames = "false";
            byed = true;
        });
    }

    $$_dino.dinoscope = true;
})();