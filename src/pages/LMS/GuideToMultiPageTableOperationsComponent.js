import React from 'react';

const GuideToMultiPageTableOperationsComponent = () => {
  return (
    <div>
      <h2>A Guide to Multi-page Table Operations</h2>
      
      <h3>Merging Tables</h3>
      <p>On any table, Click on the edit icon</p>
      <img src="merge_tables_1.png" alt="Merge Tables Step 1" />

      <p>Choose the tables that you would like to merge. The list will be populated based on the tables that can be merged (based on the conditions described in the previous sub-section)</p>
      <img src="merge_tables_2.png" alt="Merge Tables Step 2" />

      <p>Save. This results in a new merged table.</p>
      <img src="merged_tables_3.png" alt="Merged Tables" />
      
      <h3>Unmerging Tables</h3>
      <p>Click on Edit of a merged table</p>
      <img src="Screenshot_2024-07-15_at_4.56.03_PM.png" alt="Unmerge Tables Step 1" />

      <p>Choose the table(s) to remove</p>
      <img src="Screenshot_2024-07-15_at_4.56.37_PM.png" alt="Unmerge Tables Step 2" />

      <p>Click Save. The resulting merged table only has the underlying tables that are still remaining in the multi-page table.</p>
      <img src="Screenshot_2024-07-15_at_4.57.29_PM.png" alt="Unmerged Tables Result" />
    </div>
  );
};

export default GuideToMultiPageTableOperationsComponent;
