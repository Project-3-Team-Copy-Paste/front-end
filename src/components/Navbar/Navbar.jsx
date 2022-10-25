import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "../shared/LoginForm";
import RegisterForm from "../shared/RegisterForm";
import SearchBar from "./SearchBar";

function Navbar({ token, setToken }) {
	const [openLogin, setOpenLogin] = useState(false);
	const [openRegister, setOpenRegister] = useState(false);

	const username = useMemo(() => {
		if (token) {
			return localStorage.getItem('username');
		}
	}, [token]);

	return (
		<div className="navBar">
			<div className="navLinks">
				<NavLink to="/" className={"reelsLink"}>
					Reels
				</NavLink>
<<<<<<< HEAD
				{localStorage.getItem('username') ? (
					<>
						<NavLink to='/watchlist' className={'watchlistLink'}>
							Watchlist
						</NavLink>
						<NavLink to='/journal' className={'journalLink'}>
							Journal
						</NavLink>
					</>
				) : null}
=======
				<NavLink to="/watchlist" className={"watchlistLink"}>
					Watchlist
				</NavLink>
				<NavLink to="/journal" className={"journalLink"}>
					Journal
				</NavLink>
>>>>>>> 38000ce (Add registration form)
			</div>
			<SearchBar />
			{token ? (
				<>
					<span>{username}</span>
					<button
						onClick={() => {
							localStorage.removeItem('JWT');
							localStorage.removeItem('username');
							localStorage.removeItem('userId');
							setToken('');
						}}>
						Logout
					</button>
				</>
			) : (
				<>
					<button onClick={() => setOpenLogin(true)}>Login</button>
					<button onClick={() => setOpenRegister(true)}>Register</button>
					{openLogin ? <LoginForm setModal={setOpenLogin} setToken={setToken} /> : null}
					{openRegister ? <RegisterForm setModal={setOpenRegister} /> : null}
				</>
			)}
		</div>
	);
}

export default Navbar;
