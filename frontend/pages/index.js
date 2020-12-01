import React from 'react'
import Link from 'next/link'

const Index = () => (
  <>
    <h1>Home</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
  </>
)

export default Index