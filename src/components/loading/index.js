import React from 'react'
import { LockBody, Picture, ReleaseBody, Spinner } from './styles/loading'

export default function Loading({src, ...restProps}) {
    return (
        <div>
            <Spinner {...restProps}>
                <LockBody />
                <Picture src={`/images/users/${src}.png`}   />
            </Spinner>
        </div>
    )
}

Loading.ReleseBody = function LoadingReleseBody(){
    return <ReleaseBody />
} 
