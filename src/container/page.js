import React, { useState } from 'react'
import QnA from './qna'
import Project from './project'

const Page = ({ menuItem }) => {

    return (
        <>
            <div>{menuItem}</div>
            {menuItem === 'Q & A' && <QnA />}
            {menuItem === 'Project' && <Project />}
        </>
    )
}

export default Page