import { Box, FormControl, FormLabel, Input, InputGroup, Button, Center,InputRightElement, FormErrorMessage } from '@chakra-ui/react';
import { Formik, Form, Field, FormikHelpers, FormikProps } from 'formik';
import { object, string } from 'yup';
import { useState } from 'react';
import Layout from '../components/layout';

export default function SignIn() {
  const [isShowPassword, setShowPassword] = useState(false);
  const signUpSchema = object().shape({
    name: string()
    .min(6, '6文字以上で入力してください')
    .max(24, '24文字以内で入力してください')
    .required('ユーザーネームを入力してください'),
    password: string()
    .min(6, '6文字以上で入力してください')
    .max(24, '24文字以内で入力してください')
    .required('パスワードを入力してください'),
  })
  const loginButtonText = Object.freeze({
    name: 'ログイン',
    isLoading: '認証中...',
    color: 'blue',
  })
  const initialValues = {
    name: '',
    password: ''
  }
  const onFormSubmit = (values: typeof initialValues, actions: FormikHelpers<typeof initialValues>) => {};

  return (
    <>
      <Layout>
        <Box marginTop="64px" bg="white" w="100%" p={4} color="black" borderWidth="1px" borderRadius="lg">
          <Formik initialValues={initialValues} validationSchema={signUpSchema} onSubmit={onFormSubmit}>
            {
              (props: FormikProps<any>) => (
                <Form>
                  <Field name="name">
                    {({field, form}) => {
                      console.log(field)
                      console.log(form)
                      return (
                      <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel htmlFor="name">ユーザーネーム</FormLabel>
                        <InputGroup size="md">
                          <Input {...field} id="dummy_name" type="username" disabled={true} style={{display:'none'}} />
                          <Input {...field} id="name" type="username" placeholder="UserName" autoComplete="off" />
                        </InputGroup>
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>)
                    }}
                  </Field>
                  <Field name="password">
                    {({field, form}) => {
                      return (
                        <FormControl isRequired marginY="16px" isInvalid={form.errors.password && form.touched.password}>
                          <FormLabel htmlFor="password">パスワード</FormLabel>
                          <InputGroup size="md">
                            <Input {...field} id="dummy_password" type={isShowPassword ? 'text' : 'password'} placeholder="Password" autoComplete="off" />
                            <Input {...field} id="password" disabled={true} style={{display:'none'}} />
                            <InputRightElement width="4.5rem">
                              <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!isShowPassword)}>
                                {isShowPassword ? "Hide" : "Show"}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                      )
                    }}
                  </Field>
                  <Center marginTop="24px">
                    <Button isLoading={props.isSubmitting} loadingText={loginButtonText.isLoading} colorScheme={loginButtonText.color} >{loginButtonText.name}</Button>
                  </Center>
                </Form>
              )
            }
          </Formik>
        </Box>
      </Layout>
    </>
  )
}