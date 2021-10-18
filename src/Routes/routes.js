import { useContext } from 'react';
import { Redirect, Route as ReacDOMRoute } from 'react-router-dom';
import { UserContext } from '../Providers/user';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {

    const { tokenUser } = useContext(UserContext)

    return (
        <ReacDOMRoute
            {...rest}
            render={() => {
                return isPrivate === !!tokenUser ? <Component/> : <Redirect to={isPrivate ? '/' : '/habits'}/>
            }}
        />
    )
}

export default Route;