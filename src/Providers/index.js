import { GroupProvider } from "./groups";
import { UserProvider } from "./user"

const Providers = ({children}) => {
    return (
        <GroupProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </GroupProvider>
    )
}

export default Providers;