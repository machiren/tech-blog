import { Box, FormControl, FormLabel, Input, InputGroup, Button, Center,InputRightElement, FormErrorMessage } from '@chakra-ui/react';
import { Formik, Form, Field, FormikHelpers, FormikProps } from 'formik';
import { object, string } from 'yup';
import { useState } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';

export default function SignIn() {
  const [isShowPassword, setShowPassword] = useState(false);
  const signUpSchema = object().shape({
    username: string()
    .email('有効なメールアドレス形式ではありません')
    .required('ユーザーネームを入力してください'),
    password: string()
    .min(6, '6文字以上で入力してください')
    .max(24, '24文字以内で入力してください')
    .required('パスワードを入力してください'),
  })
  const loginButtonText = Object.freeze({
    name: '新規登録',
    isLoading: '登録中..',
    color: 'blue',
  })
  const initialValues = {
    username: '',
    password: '',
  }
  const onFormSubmit = (values: typeof initialValues, actions: FormikHelpers<typeof initialValues>) => {
    setTimeout(() => {
      actions.setSubmitting(false)
    }, 2000);
    console.log(values)
    console.log(actions)
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Sign Up | Match</title>
        </Head>
        <Box marginTop="64px" bg="white" w="100%" p={4} color="black" borderWidth="1px" borderRadius="lg">
          <Formik initialValues={initialValues} validationSchema={signUpSchema} onSubmit={onFormSubmit}>
            {
              (props: FormikProps<any>) => (
                <Form>
                  <Field name="username">
                    {({field, form}) => (
                      <FormControl isRequired isInvalid={form.errors.username && form.touched.username}>
                        <FormLabel htmlFor="username">ユーザーネーム</FormLabel>
                        <InputGroup size="md">
                          <Input {...field} id="username" type="username" placeholder="email" />
                        </InputGroup>
                        <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                      </FormControl>
                      )
                    }
                  </Field>
                  <Field name="password">
                    {({field, form}) => (
                        <FormControl isRequired marginY="16px" isInvalid={form.errors.password && form.touched.password}>
                          <FormLabel htmlFor="password">パスワード</FormLabel>
                          <InputGroup size="md">
                            <Input {...field} id="password" type={isShowPassword ? 'text' : 'password'} placeholder="Password" />
                            <InputRightElement width="4.5rem">
                              <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!isShowPassword)}>
                                {isShowPassword ? "Hide" : "Show"}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                      )
                    }
                  </Field>
                  <Field>
                    {() => (<Input id="new-password" type='new-password' style={{display:'none', visibility:'hidden'}} />)}
                  </Field>
                  <Center marginTop="24px">
                    <Button type="submit" isLoading={props.isSubmitting} loadingText={loginButtonText.isLoading} colorScheme={loginButtonText.color} >{loginButtonText.name}</Button>
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