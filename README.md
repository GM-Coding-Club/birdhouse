
# Birdhouse
<Fill in description here>

# Contributors
## <new line for each name>
With assistance from Daniel Sinclair 

# Challenges
### 🛑 

# How to Run on Android Emulator

### Install Git
Download [Git](https://git-scm.com/downloads) for your computer and follow installation instructions

### Install Node.js and NPM
Download the [combined installer](https://nodejs.org/en/download/) and follow installation instructions

### Install Android Studio
1. Download the [installer](https://developer.android.com/studio/)
2. Follow installation instructions
3. Run Android Studio
4. Start a New Project
![Launch Screen](./guide/AndroidStudioLaunchScreen.png)
5. Press Next
6. Select Phone & Tablet and Android 8.1 (Oreo)
![Device Selection](./guide/LauncherDeviceSelection.png)
7. Select Empty Activity
![Empty Activity](./guide/LauncherEmptyActivity.png)
8. Press Finish
9. Open AVD Manager
![AVD Manager](./guide/AVDManager.png)
10. Create a Virtual Device
![Create Virtual Device](./guide/AVDCreate.png)
11. Select the Pixel 2
![SelectPixel2](./guide/AVDPixel2.png)
12. Download & Select Android 8.1
![Download Android 8.1](./guide/AVDOreoDownload.png)
13. Change to Landscape
![Change to Landscape](./guide/AVDPixel2Custimization.png)
14. Finish
15. In AVD Manager, double click the new virtual device to launch it

Before you run the app each session, you'll need to launch the Android Emulator that you created

### Clone this repo
1. Launch Command Prompt
2. Download the repo: `git clone https://github.com/GM-Coding-Club/birdhouse.git`
3. Change to its directory: `cd birdhouse`
4. Start the app: `npm run android`