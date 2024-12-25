import styles from '../styles/PricingTable.module.css';

const Table = () => {
  const chat = [
    {
      id: 1,
      col1: 'Unlimited messages and interactions',
      col2: true,
      col3: true,
      col4: true,
    },
    {
      id: 2,
      col1: 'Context-aware coding support and explanations',
      col2: true,
      col3: true,
      col4: true,
    },
    {
      id: 3,
      col1: 'Debugging and security remediation assistance',
      col2: true,
      col3: true,
      col4: true,
    },
    {
      id: 4,
      col1: 'Access to knowledge from top open source repositories',
      col2: true,
      col3: true,
      col4: true,
    },
    {
      id: 5,
      col1: 'Generate tests, docs, and more with slash commands',
      col2: true,
      col3: true,
      col4: true,
    },
    {
      id: 6,
      col1: 'Web search powered by Bing',
      col2: true,
      col3: true,
      col4: true,
    },
    {
      id: 7,
      col1: 'Explain failed Actions jobs',
      col2: true,
      col3: true,
      col4: true,
    },
    {
      id: 8,
      col1: 'Answers about issues, PRs, discussions, files, commits, etc.',
      col2: true,
      col3: true,
      col4: true,
    },
    {
      id: 9,
      col1: 'Multi-file editing in VS Code',
      col2: true,
      col3: true,
      col4: true,
    },
    {
      id: 10,
      col1: 'Switch between models',
      col2: true,
      col3: true,
      col4: true,
    },
    {
      id: 11,
      col1: 'Real-time code suggestions',
      col2: true,
      col3: true,
      col4: true,
    },
    {
      id: 12,
      col1: 'Comments to code',
      col2: true,
      col3: true,
      col4: true,
    },
  ];

  const code = [
    {
      id: 1,
      col1: 'Real-time code suggestions',
      col2: true,
      col3: true,
      col4: true,
    },
    {
      id: 2,
      col1: 'Comments to code',
      col2: true,
      col3: true,
      col4: true,
    },
  ];

  const Check = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12.5L7.67616 16.137C7.76909 16.2758 7.89383 16.3904 8.04 16.4713C8.18617 16.5522 8.34955 16.597 8.51653 16.602C8.68351 16.607 8.84926 16.572 9 16.5C9.15074 16.428 9.2821 16.321 9.38316 16.188L19.5 6"
        stroke="#A371F7"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <table className={styles.customTable}>
      <thead>
        <tr>
          <h4>Compare features</h4>
          <th className={styles.columnHead}>
            Individual
            <div className={styles.columnPrice}>
              <p>$10</p>
              <div className={styles.columnPriceSide}>
                per user <br />
                per month
              </div>
            </div>
          </th>
          <th className={styles.columnHead}>
            Business
            <div className={styles.columnPrice}>
              <p>$19</p>
              <div className={styles.columnPriceSide}>
                per user <br />
                per month
              </div>
            </div>
          </th>
          <th className={styles.columnHead}>
            Enterprise
            <div className={styles.columnPrice}>
              <p>$39</p>
              <div className={styles.columnPriceSide}>
                per user <br />
                per month
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.subHeadline}>
          <td colSpan="4">Chat</td>
        </tr>
        {chat.map((row) => (
          <tr key={row.id}>
            <td className={styles.rowContent}>{row.col1}</td>
            <td>{row.col2 ? <Check /> : null}</td>
            <td>{row.col3 ? <Check /> : null}</td>
            <td>{row.col4 ? <Check /> : null}</td>
          </tr>
        ))}
        <tr className={styles.subHeadline}>
          <td colSpan="4">Code completion</td>
        </tr>
        {code.map((row) => (
          <tr key={row.id}>
            <td className={styles.rowContent}>{row.col1}</td>
            <td>{row.col2 ? <Check /> : null}</td>
            <td>{row.col3 ? <Check /> : null}</td>
            <td>{row.col4 ? <Check /> : null}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
