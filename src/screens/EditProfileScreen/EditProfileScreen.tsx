import React, {useState} from 'react'
import {Image, StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native'
import Button from "../../components/Button";
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {useForm, Controller, Control} from "react-hook-form";
import user from '../../data/user.json'
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import {IUser} from "../../types/models";


// const URL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const URL_REGEX =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;



type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>

interface ICustomInput extends TextInputProps{
    control: Control<IEditableUser, object>;
    label: string;
    name: IEditableUserField;
    multiline?: boolean;
    rules?: object;
}
const CustomInput = ({control, name, label, multiline = false, rules={}, ...rest}: ICustomInput) => (
    <Controller
       control={control}
       name={name}
       rules={rules}
       render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
           return (
           <View style={styles.inputContainer}>
               <Text style={styles.label}>{label}:</Text>
               <View style={{ flex: 1}}>
                   <TextInput
                       {...rest}
                       value={value}
                       onChangeText={onChange}
                       onBlur={onBlur}
                       placeholder={label}
                       style={[styles.input,
                           {borderColor: error ? colors.error : colors.border}]}
                       multiline={multiline}
                   />
                   {error &&
                       <Text style={{color: colors.error}}>
                           {error.message || 'Error'}
                       </Text>
                   }
               </View>
           </View>
       )}}
    />
);

const EditProfileScreen = ()  =>{

    const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);

    const {control, handleSubmit, formState: {errors}} = useForm<IEditableUser>({
        defaultValues: {
            name: user.name,
            username: user.username,
            website: user.website,
            bio: user.bio,
        }
    });

    const onSubmit = (data: IEditableUser) => {
        console.log(data);
    }

    const onChangePhoto = () => {
        launchImageLibrary({
            mediaType: 'photo'},
        ({didCancel, errorCode, errorMessage, assets}) => {
            if (!didCancel && !errorCode && assets && assets.length > 0) {
                setSelectedPhoto(assets[0]);
            }
        });
    }


    return (
        <View style={styles.page}>
            <Image source={{uri: selectedPhoto?.uri || user.image}} style={styles.avatar}/>
            <Text onPress={onChangePhoto} style={styles.textButton}>Change Profile Photo</Text>

            <CustomInput
                label="Name"
                name="name"
                control={control}
                rules={{required: 'Name is required'}}
            />
            <CustomInput
                label="Username"
                name="username"
                control={control}
                rules={{
                    required: 'Username is required',
                    minLength: {value: 3,
                        message: 'Username should be at least 3 characters long'
                    }}}
            />
            <CustomInput
                label="Website"
                name="website"
                autoCapitalize="none"
                control={control}
                rules={{
                    required: 'Website is required',
                    pattern: {
                        value: URL_REGEX,
                        message: 'Invalid URL'
                    }
            }}

            />
            <CustomInput
                name="bio"
                label="Bio" multiline
                control={control}
                rules={{
                    maxLength: {
                    value: 200,
                        message: 'Bio should be less than 200 characters long'
                }}}

            />

            <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
                Submit
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    page: {
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 100,
    },
    textButton: {
        color: colors.primary,
        fontSize: fonts.size.md,
        fontWeight: fonts.weight.semi,
        margin: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingBottom: 20,

    },
    label: {
        width: 75,
    },
    input: {
        borderBottomWidth: 1,
    }
})

export default EditProfileScreen;
