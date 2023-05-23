import React from 'react';

import Card from '../../components/Card';

import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.home}>
            <nav className={styles.cardNav}>
                <Card
                    className={styles.card}
                    sprite={{ type: 'monsters', id: 'werewolf' }}
                    title="Analyze Seed"
                    description="Upload a Dragon Warrior Randomizer ROM for analysis."
                    link="/analyze"
                />
                <Card
                    className={styles.card}
                    sprite={{ type: 'monsters', id: 'armored_knight' }}
                    title="Browse Seeds"
                    description="Browse the generated database of seeds."
                    link="/browse"
                />
            </nav>
        </section>
    );
};

export default Home;
