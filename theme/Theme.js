import { Dimensions } from "react-native";



//Device Dimenstions
const { width, height } = Dimensions.get("screen");

//colors
export const ColorTheme = {
  primary: "#FFFFFF",
  main: "#2FBF00",
  orange: "#FF8115",
  green: "#00BB56",
  red: "#FF0000",
  blue: "#3190FF",
  greyBackground: "#F1F1F1",
  greyFont: "#7A7A7A",
  black:"#000000",
  grey4: "#D7D7D7",
  lightBlue: "#EEF9FF",
};

const {
  primary,
  main,
  orange,
  green,
  red,
  blue,
  greyFont,
  greyBackground,
  lightBlue,
  grey4,
  black,
} = ColorTheme;

// componets styles
export const FontTheme = {
  inputTitle: {
    fontFamily: "Poppins-Medium",
    color: "black",
    fontSize: 17,
    lineHeight: 32,
    paddingTop: 10,
    paddingBottom: 0,
  },
  iconButton: {
    fontFamily: "Poppins-Medium",
    color: grey4,
    fontStyle: "normal",
    fontSize: 20,
    paddingLeft: 10,
  },
  icontext: {
    width: "90%",
    fontFamily: "Poppins-Medium",
  
    fontStyle: "normal",
    fontSize: 14,
  },
  motto: {
    fontFamily: "Poppins-Regular",
    color: greyFont,
    textAlign:'center',
    marginTop:'10%',
    fontSize: 25,
    lineHeight: 32,
    paddingTop: 0,
    paddingBottom: '7%',
    width:width *0.80
  },

  description: {
    width: "90%",
    fontFamily: "Poppins-Medium",
  
    fontStyle: "normal",
    fontSize: 18,
  },

  mainButtonFont: {
    fontFamily: "Poppins-Bold",
    color: primary,
    fontSize: 22,
    textTransform: "uppercase",
  },
  messagetxt: {
    width: width / 1.15,
    marginTop: 5,
    fontFamily: "Poppins-Medium",
    color: "#7D7D7D",
    textAlign: "left",
  },
  errortxt: {
    fontFamily: "Poppins-Regular",
    width: width / 1.15,
    color: red,
    fontStyle: "normal",
    fontSize: 12,
    textAlign: "left",
    paddingTop: 5,
  },

  footerText: {
    fontFamily: "Poppins-Regular",
    color: greyFont,
    fontSize: 14,
  },
  
  footerLink: {
    width: "70%",
    fontFamily: "Poppins-Medium",
    color: orange,
    fontSize: 16,
    textAlign: "center",
    paddingTop: '5%',
    textDecorationLine: "underline",
  },
};

export const ContainerTheme ={
    LoginContainer:{
     display: 'flex',
     
     alignItems: 'center',

    },
    LoginLine:{
        width:width * 0.85,
        height: 2,
        backgroundColor: grey4,
        marginTop:'7%',
    },
    GlobalHeader:{
       width: '100%',
       height: '10%',
       paddingLeft:'5%',
       paddingRight:'5%',
       backgroundColor:ColorTheme.primary,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center'

    }
}
export const InputTheme={
    LoginInput:{
    borderWidth:1,
    borderColor: grey4,
    width: width * 0.8,
    borderRadius: 10,
    height: 50,
    color:black,
    paddingLeft: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    marginTop:'5%',
    },
    SearchInput:{
      borderRadius: 10,
      paddingLeft: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    backgroundColor: grey4,
    width: width * 0.90,
    height: 40,
    }
}

export const ButtonTheme={
    MainButton:{
    width: width * 0.8,
    borderRadius: 10,
    height: 50,
    marginTop:'7%',
    justifyContent:'center'
    },
    ButtonText:{
    fontFamily: "Poppins-Medium",
    color:primary,
    fontSize:18,
    textAlign:'center',
    },
    MenuSelectButton:{
      backgroundColor: greyBackground,
      width: width*0.85,
      height: height*0.07,
      borderRadius: 10,
      alignItems:'center',
      flexDirection:'row',
      paddingLeft: '5%',
      marginTop: "5%",
    
    }
}

export const LogoTheme = {
  mainLogo: {
    width: width*0.6,
    height: height *0.05,},
  miniLogo: {
    resizeMode: "contain",
    width: 150,
  },
};