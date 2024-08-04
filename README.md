# Chrome-Extension-video-speed-controller

## Overview

YouTube Speed Controller is a Chrome extension that allows users to easily adjust the playback speed of YouTube videos. The extension provides a simple interface to set the playback speed to 1x, 1.5x, 2x, 3x or 4x.

## Features

- Quickly change the playback speed of YouTube videos.
- Easy-to-use popup interface.
- Simple installation and usage.

## Installation

To install the extension locally:

1. Clone the repository or download the ZIP file.
2. Open Google Chrome and navigate to chrome://extensions/.
3. Enable "Developer mode" using the toggle switch in the top right.
4. Click "Load unpacked" and select the folder where you cloned/downloaded the extension.

## Usage

1. Open YouTube and play any video.
2. Click on the YouTube Speed Controller extension icon in the Chrome toolbar.
3. Select the desired playback speed from the popup interface.

## Files and Directories

` manifest.json `

The manifest file defines the extension's metadata, permissions, and scripts.

`content.js`

The content script that is injected into YouTube pages to control the video playback speed.

`popup.html `

The HTML file for the popup interface that appears when the extension icon is clicked.

`popup.js`

The JavaScript file that handles interactions in the popup and communicates with the content script.

`background.js`

This file is included in the manifest but not used in this project. It can be used for background tasks if needed


### Icons

The extension uses icons of various sizes (16x16, 48x48, 128x128 pixels). Ensure these icons are present in the directory or adjust the paths in the manifest accordingly.


# Common Error and Solution

- While developing the extension, you might encounter an error stating:

```
Uncaught (in promise) Error: Could not establish connection. Receiving end does not exist.

```

This error typically occurs when you make changes to the extension, causing it to break. This problem is not due to the code itself but rather the behavior of Chrome. Sometimes Chrome automatically reflects changes made to the extension, but other times it does not.

## Solution:

To resolve this issue, simply close Google Chrome completely and reopen it. This will ensure that the changes to the extension are properly reflected and the extension will work as expected.



# Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to submit a pull request or open an issue.

