# React Image Upload

![React Image Upload](https://cdn-images-1.medium.com/max/1600/1*2a5Zidam3OI-Ep19-tT1AQ.gif)

## Medium post that details this repo
* [Simple Image Upload with React](https://medium.com/p/cc96430eaece)
* [Live demo](https://react-image-upload.surge.sh)

## Getting Started

```
git clone https://github.com/funador/react-image-upload.git
cd react-image-upload/client
npm i && npm start
// open new terminal
cd react-image-upload/server
npm i && npm run dev
```

#### To run this project you need a Cloudinary account. 
You can sign up with Cloudinary [here](https://cloudinary.com/users/register/free).  Afterwards you will need to plug your keys into a *.env* file that needs to be created as well. 

```shell
// server/.env
CLOUD_NAME=your_cloud_name
API_KEY=your_cloud_key
API_SECRET=your_cloud_secret
```

But that is it for the setup!

### Issues

Something not working?  Please [open an issue](https://github.com/funador/react-image-upload/issues)