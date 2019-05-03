import { SCREEN_HEIGHT, Platform, Dimensions } from 'react-native';
// const { height, width } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export const colors = {
    primary: "#00C871",
    secondary: "#fa600d",
    background: "#F9F9F9",
    grey: "",
    lightgrey: "#BDBDBD",
    white: "#fff",
    black: "#000",
    lightBlack: "#404040"
}