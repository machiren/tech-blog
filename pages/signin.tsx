import { Box, FormControl, FormLabel, Input, InputGroup, Button, Center, Heading,InputRightElement, FormErrorMessage } from '@chakra-ui/react';
import { Formik, Form, Field, FormikHelpers, FormikProps } from 'formik';
import { useState } from 'react';
import Layout from '../components/layout';

export default function SignIn() {
  const [isShowPassword, setShowPassword] = useState(false);
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
  const filedValidator = Object.freeze({
    name: (value) => {
      if (!value) {
        return "Name is required";
      }
    },
    password: (value) => {
      if (!value) {
        return "Password is required";
      }
    }
  });

  return (
    <>
      <Layout>
        <Center marginTop="64px">
          <Heading as="h1">ポートフォリオログイン管理画面</Heading>
        </Center>
        <Box marginTop="64px" bg="white" w="100%" p={4} color="black" borderWidth="1px" borderRadius="lg">
          <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
            {
              (props: FormikProps<any>) => (
                <Form>
                  <Field name="name" validate={filedValidator.name}>
                    {({field, form}) => {
                      console.log(field)
                      console.log(form)
                      return (
                      <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel htmlFor="nauser_nameme">ユーザーネーム</FormLabel>
                        <InputGroup size="md">
                        <Input {...field} id="user_name" type="username" placeholder="UserName" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </InputGroup>
                      </FormControl>)
                    }}
                  </Field>
                  <Field name="password" validate={filedValidator.password}>
                    {({field, form}) => {
                      return (
                        <FormControl isRequired marginY="16px" isInvalid={form.errors.password && form.touched.password}>
                          <FormLabel htmlFor="user_password">パスワード</FormLabel>
                          <InputGroup size="md">
                          <Input {...field} id="user_password" type={isShowPassword ? 'text' : 'password'} placeholder="Password" />
                          <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!isShowPassword)}>
                              {isShowPassword ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                          </InputGroup>
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