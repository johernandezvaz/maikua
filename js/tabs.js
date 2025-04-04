export function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    function showTab(tabId) {
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === tabId) {
          content.classList.add('active');
        }
      });
  
      tabButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.tab === tabId) {
          button.classList.add('active');
        }
      });
    }
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        showTab(button.dataset.tab);
      });
    });
  
    // Show first tab by default
    if (tabButtons.length > 0) {
      showTab(tabButtons[0].dataset.tab);
    }
  }