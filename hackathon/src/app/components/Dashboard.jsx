const Dashboard = () => {
    const data = [
      {
        department: 'Sales',
        revenue: '$125,000',
        expenses: '$45,000',
        profit: '$80,000',
        growth: '+15%',
        status: 'On Track'
      },
      {
        department: 'Marketing',
        revenue: '$85,000',
        expenses: '$35,000',
        profit: '$50,000',
        growth: '+8%',
        status: 'On Track'
      },
      {
        department: 'Operations',
        revenue: '$95,000',
        expenses: '$65,000',
        profit: '$30,000',
        growth: '-3%',
        status: 'At Risk'
      },
      {
        department: 'IT',
        revenue: '$75,000',
        expenses: '$40,000',
        profit: '$35,000',
        growth: '+5%',
        status: 'On Track'
      },
      {
        department: 'HR',
        revenue: '$45,000',
        expenses: '$38,000',
        profit: '$7,000',
        growth: '-2%',
        status: 'At Risk'
      }
    ];
  
    return (
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          Department Performance Dashboard
        </h2>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            backgroundColor: 'white',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <thead>
              <tr style={{ 
                backgroundColor: '#f3f4f6',
                textAlign: 'left'
              }}>
                <th style={{ padding: '12px 16px', borderBottom: '2px solid #e5e7eb' }}>Department</th>
                <th style={{ padding: '12px 16px', borderBottom: '2px solid #e5e7eb' }}>Revenue</th>
                <th style={{ padding: '12px 16px', borderBottom: '2px solid #e5e7eb' }}>Expenses</th>
                <th style={{ padding: '12px 16px', borderBottom: '2px solid #e5e7eb' }}>Profit</th>
                <th style={{ padding: '12px 16px', borderBottom: '2px solid #e5e7eb' }}>Growth</th>
                <th style={{ padding: '12px 16px', borderBottom: '2px solid #e5e7eb' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} style={{ 
                  borderBottom: '1px solid #e5e7eb',
                  ':hover': { backgroundColor: '#f9fafb' }
                }}>
                  <td style={{ padding: '12px 16px', fontWeight: '500' }}>{row.department}</td>
                  <td style={{ padding: '12px 16px' }}>{row.revenue}</td>
                  <td style={{ padding: '12px 16px' }}>{row.expenses}</td>
                  <td style={{ padding: '12px 16px' }}>{row.profit}</td>
                  <td style={{ 
                    padding: '12px 16px',
                    color: row.growth.startsWith('+') ? '#059669' : '#dc2626'
                  }}>
                    {row.growth}
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '14px',
                      backgroundColor: row.status === 'On Track' ? '#dcfce7' : '#fee2e2',
                      color: row.status === 'On Track' ? '#059669' : '#dc2626'
                    }}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Dashboard;