import React from 'react';
import homeStore from '../stores/homeStore'
import Header from '../components/Header'
import ListItems from '../components/ListItems'

export default function Home(){
    const store = homeStore()

    React.useEffect(() => {
        store.fetchCoins()
 // eslint-disable-next-line
    }, [])

    return(
        <div>
          <Header />
          <header className='home-search'>
            <div className='width'>
                <h2>Search for a coin</h2>
                <input type = "text" value={store.query} onChange={store.setQuery}/>
            </div>
            
          </header>
          <div className='home-cryptos'>
                <div className='width'>
                    <h2>Trending Coins</h2>
                    <h5> *click on them to see the graph</h5>
                    <div class="home-cryptos-list">
                        {store.coins.map(coin => {
                        return<ListItems key={coin.id} coin={coin} />;
                        })}
                    </div>
                </div>
                
            </div>
        </div>
    )

}

