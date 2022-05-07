import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            <header className='header'><img className="logo" src="/images/logo.png" alt="" /></header>
            <main className='Auth'>
                <div>
                    <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
                </div>
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            </main>
        </div>
    );
}

