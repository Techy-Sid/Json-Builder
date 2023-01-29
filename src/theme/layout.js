import React, { useState, useCallback } from 'react'
import Header from '../components/Header'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import Page from '../container/page'
import { Loader } from '../static/images/imgStore'

const Layout = () => {
    const [show, setShow] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [isSignInClicked, setSignIn] = useState(false)

    const handleSignIn = useCallback(val => {
        setSignIn(val)
    }, [])

    const handleLoading = useCallback(val => {
        setLoading(val)
    }, [])

    const handleViewPage = useCallback(val => {
        setShow(val)
    }, [])

    return (
        <>
            {isLoading ? (
                <>
                    <Header handleSignIn={handleSignIn} />
                    <Loader />
                </>
            ) : (
                <>
                    <Header handleSignIn={handleSignIn} isHeaderChange={!show} />
                    {isSignInClicked ? (
                        <div>
                            {!show && <SignIn handleSignIn={handleSignIn} handleLoading={handleLoading} handleViewPage={handleViewPage} />}
                            {show && <Page />}
                        </div>
                    ) : (
                        <SignUp handleSignIn={handleSignIn} />
                    )}
                </>
            )}
        </>
    )
}

export default Layout