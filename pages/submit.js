import React from "react";  
import Head from 'next/head'
import Layout from '@/components/Layout'
import Form from '@/components/Form'
import UserJokes from '@/components/UserJokes'
import { useSession, getSession } from "next-auth/react";

export default function Submit({ userJokes }) {
  const {data: session, status} = useSession({required: true});
  if (status === 'authenticated'){
    return (
      <>
        <Head>
          <title>Random Joke Generator</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
        </Head>
        <Layout>
          <Form />
          <UserJokes userJokes={userJokes} />
        </Layout>
      </>
    )
  }else{
    return (
      <> 
        <button onClick={() => signIn()}> Sign In </button>
      </>
    )
  }
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/resources`)
  const data = await response.json()

  return {
      props: {
          userJokes: data,
      },
  }
}

