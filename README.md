# maps
Offline maps for iOS and Android

# Installation instructions
Download or clone the repository and run `yarn install` *not* `npm install`.
Make sure to include the `MBTiles` Database `dhaka2.mbtiles` in XCode and Android Studio in order to bundle it with the application. `dhaka2.mbtiles` was created with this tool: https://github.com/posm/OpenMapKitAndroid/wiki/Creating-Your-Own-MBTiles-Basemap-File

The `package.json` links to this Repository https://github.com/Stophface/react-native-maps-0.20.1 to this commit: 8447f9a83bbd4538b10cffe4a9ab5b5d1a206d69. This commit includes the transformation of the y-Value, because the `dhaka2.mbtiles` database was created using the `TMS` specification. The commit further access the bundle of the application, making passing a path to access the database obselte. This is done for convinience because the `dhaka2.mbtiles` database must not be downloaded onto the device but is bundled with the application. 

If there is a problem with `Pods` and `yoga` during installation:
Delete the `node_modules` folder, open `package.json` and change

```
"react-native": "0.54.0-rc.3",
```

to

```
"react-native": "0.54.3",
```

Then run `yarn install`. Then go into the `iOS` folder and run `pod install`. After running `pod install` delete the 
`node_modules` folder and change `package.json` back, from

```
"react-native": "0.54.0-rc.3",
```

to

```
"react-native": "0.54.3",
```

Then run `yarn install` again. The reason for this can be read here: https://github.com/react-community/react-native-maps/issues/2051
