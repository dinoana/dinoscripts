# dinoscripts

An archive of the dinoscripts, welcome to the secrets of [splixland](https://splix.io)!

## How to install?

- Install [tampermonkey](https://www.tampermonkey.net/) extension for your browser if you don't have it already.
- Copy the content of any of the scripts (files end with .dino.js) from this repository.
- Click on *create a new script* option from the extension's menu.
- Replace the content of the newly opened editor with the copied script.
- Reload splix once.. umm.. maybe twice if it didn't work..
- Yayyy...

## How to use?

Each scripts have a short description below in this README, refer it to know how to use each of them.

## How to change what keyboard key does what?

- Glance through the script until you find something that resembles the keypress related info, like `KeyF`, `Numpad6`
- Open this [website](https://www.toptal.com/developers/keycode) and press the new key.
- Copy what's written on `event.code` section of the website.
- Replace the old keycode in the script with new one (be careful to replace only the key.code related string, javascript goes crazy if you accidentally removed characters like `'`, `:`)
- Make sure there's no new red underlines or ❌ popped up.
- Save changes and reload splix.

##### PROTIP: Show the code to chatgpt and ask it for help

### NOTE:
New scripts are added at least once in every month.

## Scripts

### 1. Dinoscope

Never let go a player unnoticed! draws a dark circle around players, change the color of their names to white, the names grows larger if zoomed out too.. and it make the honks looks cute cutee..
