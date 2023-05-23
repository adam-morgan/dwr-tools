import React from 'react';
import PropTypes from 'prop-types';
import { FileUploader } from 'react-drag-drop-files';

import styles from './styles/FileUpload.module.css';

const FileUpload = (props) => {
    let text = props.text;
    if (props.file) {
        text = props.file.name;
    }

    return (
        <section className={styles.fileUploadWrapper}>
            <section className={styles.fileUpload}>
                <FileUploader
                    handleChange={(file) => props.fileChanged(file)}
                    name="file"
                    multiple={false}
                >
                    <section className={styles.inner}>
                        <img alt="Upload" src="/images/upload.png" />
                        <span>{text}</span>
                    </section>
                </FileUploader>
            </section>
        </section>
    );
};

FileUpload.propTypes = {
    text: PropTypes.string,
    file: PropTypes.object,
    fileChanged: PropTypes.func
};

FileUpload.defaultProps = {
    text: 'Drag and drop your file here, or click/tap to select a file.'
};

export default FileUpload;
