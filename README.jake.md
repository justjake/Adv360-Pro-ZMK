# ADV360-PRO-ZMK

Configure: https://kinesiscorporation.github.io/Adv360-Pro-GUI/

## To build Firmware in GitHub Actions

### Setup

1. Fork this repo.
2. Enable GitHub Actions on your fork.

### Build firmware

1. Push a commit to trigger the build.
2. Download the artifact: https://github.com/justjake/Adv360-Pro-ZMK/actions/

## Local building in a container

### Setup

#### Software

Either Podman or Docker is required, Podman is preferred if both are present.\
Make is also required

#### Windows specific

If compiling on Windows use WSL2 and Docker [Docker Setup Guide](https://docs.docker.com/desktop/windows/wsl/).\
Install make using `sudo apt-get install make`.\
The repository can be cloned directly into the WSL2 instance or accessed through the C: mount point WSL provides by default (`/mnt/c/path-to-repo`).

### Build firmware

1. Execute `make`.
2. Check the `firmware` directory for the latest firmware build.

### Cleanup

The built docker container and compiled firmware files can be deleted with `make clean`.

## Flashing firmware

Follow the programming instruction on page 8 of the [Quick Start Guide](https://kinesis-ergo.com/wp-content/uploads/Advantage360-Professional-QSG-v8-25-22.pdf) to flash the firmware.

- Download the firmware: https://github.com/justjake/Adv360-Pro-ZMK/actions/
- Left Module Bootloader: Mod + Hotkey 1
- Right Module Bootloader: Mod + Hotkey 3

1. Obtain the desired Advantage360 Pro firmware update files (“.uf2” files) from GitHub (Note: There are separate Left and Right versions so be sure to install them on the correct modules)
2. Connect the left module to your PC using the included cable
3. Then place the left module into bootloader mode using a paperclip or hotkey to DOUBLE-CLICK on the Reset Button (Important Note: keystrokes on the keyboard are disabled while in bootloader).
4. Copy the left.uf2 firmware update file: `cp -X left.uf2 /Volumes/ADV360PRO`
5. The keyboard will automatically install the file and disconnect the removable drive. DO NOT DISCONNECT THE KEYBOARD UNTIL THE “ADV360 PRO” DRIVE EJECTS ITSELF.
6. Now connect the right module to your PC and place the right module into bootloader mode using its Reset
   Button
7. Copy the right firmware update file: `cp -X right.uf2 /Volumes/ADV360PRO`
8. The keyboard will automatically install the file and disconnect the removable drive.
9. Once both sides have been updated you are ready to go. DO NOT ATTEMPT TO RUN DIFFERENT VERSIONS OF FIRMWARE ON THE MODULES.

## Other support

Further support resources can be found on Kinesis.com
https://kinesis-ergo.com/support/kb360pro/#firmware-updates
https://kinesis-ergo.com/support/kb360pro/#manuals

## Branch info

- v3.0-beta seems to be promising
- V2.0 seems to be production
- Jake's good keymap was on jake--V2.0-before-2023-06-01
