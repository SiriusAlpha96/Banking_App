import HeaderBox from '@/components/Header'
// import RecentTransactions from '@/components/RecentTransaction';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
// import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  // const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  // const accounts = await getAccounts({ 
  //   userId: loggedIn.$id 
  // })

  // if(!accounts) return;
  
  // const accountsData = accounts?.data;
  // const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  // const account = await getAccount({ appwriteItemId })

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name }
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={153567.87}
          />
        </header>

        {/* <RecentTransactions 
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        /> */}
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{},{}]}
      />
    </section>
  )
}

export default Home



