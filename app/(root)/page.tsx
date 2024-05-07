import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
	const loggedIn = {
		firstName: "Keith",
		lastName: "Ken",
		email: "keithken972@gmail.com",
	};
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn.firstName || "GUST"}
						subtext="Access and manage your account and transactions efficiently"
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.35}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>
			<RightSideBar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
			/>
		</section>
	);
};

export default Home;
