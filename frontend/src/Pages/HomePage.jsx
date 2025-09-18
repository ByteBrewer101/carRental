import { useNavigate } from "react-router-dom"

export function HomePage(){
const nav = useNavigate()

function handleSignIn(){
    nav("/signin")
}
function handleSignUp(){
    nav("/signup")
}

    return <div>
        HomePage
        <div>
            <button onClick={handleSignUp}>SignUp</button>
            <button onClick={handleSignIn}>SignIn</button>
        </div>
    </div>
}