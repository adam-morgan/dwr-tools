import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';
import FileUpload from '../../components/FileUpload';

import { setActiveRomFile } from '../../data/rom/romSlice';

import styles from './AnalyzeRom.module.css';

const AnalyzeRom = () => {
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);

    return (
        <section className={styles.analyzeRom}>
            <header className={styles.title}>
                Analyze Seed
            </header>
            <FileUpload
                text="Drag and drop your Dragon Warrior Randomizer ROM here, or click/tap to select a file."
                file={file}
                fileChanged={(file) => setFile(file)}
            />
            {file ?
                (
                    <Button
                        text="Analyze"
                        onAction={async () => {
                            await dispatch(setActiveRomFile(file));
                        }}
                    />
                ) :
                null}
        </section>
    );
};

export default AnalyzeRom;
