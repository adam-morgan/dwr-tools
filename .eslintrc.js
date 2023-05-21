module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2020
    },
    root: true,
    extends: 'airbnb',
    rules: {
        // errors
        'no-constant-condition': ['error', { checkLoops: false }],
        // best practices
        curly: ['error', 'all'],
        'guard-for-in': 'off',
        'no-console': 'off',
        'no-else-return': ['error', { allowElseIf: true }],
        'no-loop-func': 'off',
        'no-param-reassign': 'off',
        'no-await-in-loop': 'off',
        'no-multi-str': 'off',
        'no-promise-executor-return': 'off',
        'no-bitwise': 'off',
        // TODO: enable this rule
        'consistent-return': 'off',
        // TODO: enable this rule
        'class-methods-use-this': 'off',
        // variables
        'no-use-before-define': 'off',
        'no-shadow': 'off',
        // style
        'array-bracket-newline': ['error', 'consistent'],
        'array-element-newline': 'off',
        camelcase: ['error', { properties: 'never' }],
        'comma-dangle': ['error', 'never'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'max-len': ['error', { code: 120 }],
        // 'multiline-ternary': ['error', 'always-multiline'],
        'no-continue': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'operator-linebreak': ['error', 'after'],
        'no-multi-assign': 'off',
        'no-underscore-dangle': 'off',
        'object-curly-newline': ['error', { consistent: true }],
        'max-classes-per-file': 'off',
        'no-async-promise-executor': 'off',
        // ES6
        'arrow-body-style': 'off',
        'prefer-destructuring': 'off',
        // React
        'react/destructuring-assignment': 'off',
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-one-expression-per-line': 'off',
        'react/no-unused-prop-types': 'off',
        'react/require-default-props': 'off',
        'react/sort-comp': ['error', { order: ['lifecycle', 'render', 'everything-else'] }],
        // 'react/forbid-prop-types': [
        //     'error',
        //     { forbid: ['any'], checkContextTypes: true, checkChildContextTypes: true }
        // ],
        'react/jsx-props-no-spreading': 'off',
        // TODO: enable this rule
        'react/no-array-index-key': 'off',
        // TODO: enable this rule
        'react/forbid-foreign-prop-types': 'off',
        // TODO: enable this rule
        'react/no-multi-comp': 'off',
        // Import
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/first': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        // TODO: enable this rule
        'import/no-cycle': 'off',
        // Accessibility (we may want to re-enable these later)
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        // JSX
        'jsx-a11y/anchor-is-valid': [
            'error',
            // Needed until we get latest verison of airbnb rules.
            { components: ['Link'], specialLink: ['to'] }
        ],
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/anchor-has-content': 'off',
        // TODO: The following rules were turned off smooth the transition to eslint 8.8.0.
        // They should be re-evaluated when time permits.
        'prefer-regex-literals': 'off',
        'default-param-last': 'off',
        'function-paren-newline': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react/jsx-no-constructed-context-values': 'off',
        'multiline-ternary': ['warn', 'always-multiline'],
        'function-call-argument-newline': 'off',
        'react/no-unstable-nested-components': 'off',
        'import/no-relative-packages': 'off',
        'react/forbid-prop-types': [
            'warn',
            { forbid: ['any'], checkContextTypes: true, checkChildContextTypes: true }
        ],
        'react/no-unused-class-component-methods': 'off'
    }
};
