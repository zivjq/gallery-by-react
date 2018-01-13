require('normalize.css/normalize.css');
require('styles/App.css');
//获取图片数据
var imagesDatas=require("../data/imagesData.json");
//自执行函数？？？？
imagesDatas=(function getImageURL(imageDataArray){
  for(var i=0;i<imageDataArray.length;i++){
    var singleImageData=imageDataArray[i];
    singleImageData.imageURL=require("../images/"+singleImageData.fileName);
    imageDataArray[i]=singleImageData;
  }
  return imageDataArray;
})(imagesDatas);

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">


        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
