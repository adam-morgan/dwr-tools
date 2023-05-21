import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FileUploader } from 'react-drag-drop-files';

import Button from '../button/Button';

import styles from './FileUpload.module.css';

const FileUpload = (props) => {
    const [file, setFile] = useState(null);

    let text = props.text;
    if (file) {
        text = file.name;
    }

    return (
        <section className={styles.fileUploadWrapper}>
            <section className={styles.fileUpload}>
                <FileUploader
                    handleChange={(file) => setFile(file)}
                    name="file"
                    multiple={false}
                >
                    <section className={styles.inner}>
                        <img alt="Upload" src="/images/upload.png" />
                        <span>{text}</span>
                    </section>
                </FileUploader>
            </section>
            {file ?
                (
                    <Button
                        text="Upload and Analyze"
                        onAction={() => {
                            // TODO
                        }}
                    />
                ) :
                null}
        </section>
    );
};

FileUpload.propTypes = {
    text: PropTypes.string
};

FileUpload.defaultProps = {
    text: 'Drag and drop your file here, or click/tap to select a file.'
};

export default FileUpload;
