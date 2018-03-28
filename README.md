# maps
Offline maps for iOS and Android

# Installation instructions
Download or clone the repository and run `yarn install` *not* `npm install`.


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
