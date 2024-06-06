import { Pressable} from "react-native";
import { ReactNode } from "react";


interface IDoublePressable {
  onDoublePress?: () => void;
  children: ReactNode;
}

const DoublePressable = ({onDoublePress = () => {}, children }: IDoublePressable) => {
  // Useful function to handle the image double Press
  let lastTap = 0;
  const handleDoublePress = () =>{
    const now = Date.now(); // TimeStamp
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  }
  return (
    <Pressable onPress={handleDoublePress}>
      {children}
    </Pressable>
  );
};


export default DoublePressable;
