import React from 'react';

import FileUpload from '../../components/upload/FileUpload';

import styles from './AnalyzeRom.module.css';

const AnalyzeRom = () => {
    return (
        <section className={styles.analyzeRom}>
            <header className={styles.title}>
                Analyze Seed
            </header>
            <FileUpload
                text="Drag and drop your Dragon Warrior Randomizer ROM here, or click/tap to select a file."
            />
        </section>
    );
};

export default AnalyzeRom;
