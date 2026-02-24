function setStatus(btn, status) {
        const card = btn.closest('.job-card');
        const badge = card.querySelector('.status-badge');
        const currentStatus = card.getAttribute('data-status');
        
        card.querySelectorAll('.act-btn').forEach(b => b.classList.remove('active'));

        if (currentStatus === status) {
            card.setAttribute('data-status', 'All');
            badge.innerText = "Not Applied";
            badge.className = "status-badge not-applied";
        } else {
            card.setAttribute('data-status', status);
            btn.classList.add('active');
            
            badge.innerText = status;
            if (status === 'Interview') {
                badge.className = "status-badge interview-badge";
            } else {
                badge.className = "status-badge rejected-badge";
            }
        }
        updateAllStats();
    }

    function removeCard(btn) {
        btn.closest('.job-card').remove();
        updateAllStats();
    }

    function filterTab(filterValue) {
        const cards = document.querySelectorAll('.job-card');
        const emptyState = document.getElementById('empty-state');
        let visibleCount = 0;

        cards.forEach(card => {
            const status = card.getAttribute('data-status');
            if (filterValue === 'All' || status === filterValue) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        
        if (visibleCount === 0) {
            emptyState.style.display = 'flex';
        } else {
            emptyState.style.display = 'none';
        }

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.innerText === filterValue);
        });

        document.getElementById('tab-job-count').innerText = visibleCount;
    }
    // updateAllStats function
    function updateAllStats() {
        const allCards = document.querySelectorAll('.job-card');
        const interviewCards = document.querySelectorAll('.job-card[data-status="Interview"]');
        const rejectedCards = document.querySelectorAll('.job-card[data-status="Rejected"]');

        document.getElementById('total-count').innerText = allCards.length;
        document.getElementById('interview-count').innerText = interviewCards.length;
        document.getElementById('rejected-count').innerText = rejectedCards.length;
        
        const activeTabElement = document.querySelector('.tab-btn.active');
        const activeTab = activeTabElement ? activeTabElement.innerText : 'All';
        filterTab(activeTab);
    }

   
    window.onload = updateAllStats;