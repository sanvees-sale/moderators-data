// Official Verified Moderator List
        const DEFAULT_MODERATORS = [
            { sl: 1, name: "Sefat Karim", weekend: "Saturday", phone: "01781597973", join: "01-01-2026", id: "mod_01781597973_0_oiq5n", status: "Present", notes: "" },
            { sl: 2, name: "Akram", weekend: "Saturday", phone: "01871976484", join: "08-03-2024", id: "mod_01871976484_1_6annd", status: "Present", notes: "" },
            { sl: 3, name: "Arman Alif", weekend: "Saturday", phone: "01406274628", join: "04-10-2025", id: "mod_01406274628_2_9hz6i", status: "Present", notes: "" },
            { sl: 4, name: "Tarikul Islam", weekend: "Saturday", phone: "01401248381", join: "03-01-2026", id: "mod_01401248381_3_7oujg", status: "Present", notes: "" },
            { sl: 5, name: "Sajedul Islam", weekend: "Sunday", phone: "01876608766", join: "13-12-2023", id: "mod_01876608766_4_9bsrc", status: "Present", notes: "" },
            { sl: 6, name: "Omar Faruk Majumder", weekend: "Sunday", phone: "01675562296", join: "31-12-2025", id: "mod_01675562296_5_6wls8", status: "Present", notes: "" },
            { sl: 7, name: "Al Arafat", weekend: "Sunday", phone: "01327948737", join: "05-01-2026", id: "mod_01327948737_6_hcciw", status: "Present", notes: "" },
            { sl: 8, name: "Moinul Islam", weekend: "Sunday", phone: "01313520845", join: "05-01-2026", id: "mod_01313520845_7_gu0pd", status: "Present", notes: "" },
            { sl: 9, name: "Md Sujon", weekend: "Monday", phone: "01762946309", join: "12-07-2024", id: "mod_01762946309_8_ciyu2", status: "Present", notes: "" },
            { sl: 10, name: "Mosharof Hossain", weekend: "Monday", phone: "01927917924", join: "01-01-2026", id: "mod_01927917924_9_upf8q", status: "Present", notes: "" },
            { sl: 11, name: "Md Raihan", weekend: "Monday", phone: "01931070660", join: "27-06-2026", id: "mod_01931070660_10_5tzb7", status: "Present", notes: "" },
            { sl: 12, name: "Fahim Howlader", weekend: "Monday", phone: "01887474044", join: "08-08-2026", id: "mod_01887474044_11_hmq5y", status: "Present", notes: "" },
            { sl: 13, name: "Sami", weekend: "Tuesday", phone: "01407914895", join: "05-01-2026", id: "mod_01407914895_13_xwcp7", status: "Present", notes: "" },
            { sl: 14, name: "Hamim", weekend: "Tuesday", phone: "01602871511", join: "05-01-2026", id: "mod_01602871511_14_to2nh", status: "Present", notes: "" },
            { sl: 15, name: "Biplob", weekend: "Tuesday", phone: "01926994536", join: "07-09-2026", id: "mod_01926994536_5t6ii", status: "Present", notes: "" },
            { sl: 16, name: "Kowshiq", weekend: "Wednesday", phone: "01956363216", join: "19-01-2024", id: "mod_01956363216_15_et879", status: "Present", notes: "" },
            { sl: 17, name: "Sahil (Forever)", weekend: "Wednesday", phone: "01947127960", join: "28-06-2026", id: "mod_01947127960_16_thmxc", status: "Present", notes: "" },
            { sl: 18, name: "Najmul Islam", weekend: "Thursday", phone: "01782417078", join: "17-05-2023", id: "mod_01782417078_18_m1u5q", status: "Present", notes: "" },
            { sl: 19, name: "Zubayer Mridha", weekend: "Thursday", phone: "01611955763", join: "12-08-2026", id: "mod_01611955763_19_qdz6h", status: "Present", notes: "" },
            { sl: 20, name: "Naim Khan", weekend: "Thursday", phone: "01615354665", join: "09-01-2025", id: "mod_01615354665_20_unaug", status: "Present", notes: "" },
            { sl: 21, name: "Sahil Sheikh", weekend: "Friday", phone: "01407722355", join: "01-12-2024", id: "mod_01407722355_21_gghnk", status: "Present", notes: "" },
            { sl: 22, name: "Rezaul Karim", weekend: "Friday", phone: "01626429771", join: "05-01-2026", id: "mod_01626429771_22_zxcoi", status: "Present", notes: "" },
            { sl: 23, name: "Piyal Sarker", weekend: "Friday", phone: "01705952384", join: "04-01-2026", id: "mod_01705952384_23_xu0wv", status: "Present", notes: "" },
            { sl: 24, name: "Tonmoy", weekend: "Friday", phone: "01921080031", join: "11-02-2026", id: "mod_01921080031_24_v2gtv", status: "Present", notes: "" },
            { sl: 25, name: "Masud Rana", weekend: "Friday", phone: "01792791593", join: "25-08-2026", id: "mod_01792791593_25_domdj", status: "Present", notes: "" },
            { sl: 26, name: "Sajib Chandro Sarker", weekend: "Friday", phone: "01641058787", join: "05-09-2026", id: "mod_01641058787_lgli6", status: "Present", notes: "" }
        ];

        let moderators = [...DEFAULT_MODERATORS];
        let attendanceHistory = {}; 
        let scheduledNightShifts = [];
        let approvedLeaves = [];
        let weekendExchanges = [];

        let currentActiveDate = ""; 
        let currentActiveMonth = ""; 
        let activeView = "daily"; 
        let selectedMonthlyModSl = "ALL"; 
        let activePickerTarget = null; 

        let searchQuery = "";
        let filterStatus = "ALL";
        let filterWeekend = "ALL";

        const DAYS_MAP = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const WEEKEND_BADGE_STYLES = {
            'Saturday': 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30 ring-1 ring-emerald-500/15',
            'Sunday': 'bg-violet-500/15 text-violet-800 dark:text-violet-300 border-violet-500/30 ring-1 ring-violet-500/15',
            'Monday': 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30 ring-1 ring-amber-500/15',
            'Tuesday': 'bg-fuchsia-500/15 text-fuchsia-800 dark:text-fuchsia-300 border-fuchsia-500/30 ring-1 ring-fuchsia-500/15',
            'Wednesday': 'bg-indigo-500/15 text-indigo-800 dark:text-indigo-300 border-indigo-500/30 ring-1 ring-indigo-500/15',
            'Thursday': 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30 ring-1 ring-cyan-500/15',
            'Friday': 'bg-rose-500/15 text-rose-800 dark:text-rose-300 border-rose-500/30 ring-1 ring-rose-500/15'
        };

        const AVATAR_PALETTES = [
            { bg: 'from-indigo-600 via-indigo-500 to-violet-600', shadow: 'shadow-indigo-500/25' },
            { bg: 'from-violet-600 via-purple-500 to-fuchsia-600', shadow: 'shadow-purple-500/25' },
            { bg: 'from-emerald-600 via-teal-500 to-cyan-600', shadow: 'shadow-emerald-500/25' },
            { bg: 'from-cyan-600 via-sky-500 to-blue-600', shadow: 'shadow-cyan-500/25' },
            { bg: 'from-amber-600 via-orange-500 to-rose-600', shadow: 'shadow-amber-500/25' },
            { bg: 'from-rose-600 via-pink-500 to-purple-600', shadow: 'shadow-rose-500/25' },
            { bg: 'from-blue-600 via-indigo-500 to-purple-600', shadow: 'shadow-blue-500/25' }
        ];

        function getAvatarTheme(sl) {
            const idx = (Math.max(1, parseInt(sl, 10) || 1) - 1) % AVATAR_PALETTES.length;
            return AVATAR_PALETTES[idx];
        }

        const WEEKEND_DAY_ORDER = {
            'Saturday': 0, 'Sunday': 1, 'Monday': 2, 'Tuesday': 3, 'Wednesday': 4, 'Thursday': 5, 'Friday': 6
        };

        // ======================= FIREBASE REALTIME DATABASE SYNC ENGINE =======================
        const DEFAULT_FIREBASE_CONFIG = {
            apiKey: "AIzaSyCHD-OfIIvMR3tAnEBZovE4uLa1ZmVAg6I",
            authDomain: "moderators-data-73dcf.firebaseapp.com",
            databaseURL: "https://moderators-data-73dcf-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "moderators-data-73dcf",
            storageBucket: "moderators-data-73dcf.firebasestorage.app",
            messagingSenderId: "31297264026",
            appId: "1:31297264026:web:51bdca0840c2cb57ea4223",
            measurementId: "G-E8K3RQWL1Z"
        };

        let firebaseApp = null;
        let firebaseDb = null;
        let isFirebaseConnected = false;
        let isFirebaseAutoSync = true;
        let isRemoteUpdateInProgress = false;

        function getFirebaseConfig() {
            const saved = localStorage.getItem('sanvees_firebase_config');
            if (saved) {
                try { return JSON.parse(saved); } catch(e) { return DEFAULT_FIREBASE_CONFIG; }
            }
            return DEFAULT_FIREBASE_CONFIG;
        }

        function initFirebaseConnection(showNotification = false) {
            try {
                const config = getFirebaseConfig();
                if (!config || !config.databaseURL) return;

                if (!firebase.apps.length) {
                    firebaseApp = firebase.initializeApp(config);
                } else {
                    firebaseApp = firebase.app();
                }

                firebaseDb = firebase.database();
                isFirebaseConnected = true;

                updateFirebaseStatusUI(true, "Connected to Singapore Realtime Database");

                // Live Listener from Firebase
                const rootRef = firebaseDb.ref('sanvees_portal');
                rootRef.on('value', (snapshot) => {
                    const data = snapshot.val();
                    if (data && !isRemoteUpdateInProgress) {
                        applyRemoteFirebaseData(data);
                    }
                }, (err) => {
                    updateFirebaseStatusUI(false, `Sync Error: ${err.message}`);
                });

                if (showNotification) showToast("🔥 Connected to Firebase Realtime Database!", "success");

            } catch (err) {
                isFirebaseConnected = false;
                updateFirebaseStatusUI(false, `Offline / Local: ${err.message}`);
            }
        }

        function applyRemoteFirebaseData(data) {
            if (!data) return;
            isRemoteUpdateInProgress = true;

            if (Array.isArray(data.moderators) && data.moderators.length > 0) {
                moderators = data.moderators;
            }
            if (data.attendanceHistory && typeof data.attendanceHistory === 'object') {
                attendanceHistory = data.attendanceHistory;
            }
            if (Array.isArray(data.nightShifts)) scheduledNightShifts = data.nightShifts;
            if (Array.isArray(data.leaves)) approvedLeaves = data.leaves;
            if (Array.isArray(data.exchanges)) weekendExchanges = data.exchanges;

            sortAndReindexModerators();
            sanitizeAndMigrateAttendanceHistory();
            localStorage.setItem('sanveesModeratorsList', JSON.stringify(moderators));
            localStorage.setItem('sanveesAttendanceHistory', JSON.stringify(attendanceHistory));
            localStorage.setItem('sanveesNightShifts', JSON.stringify(scheduledNightShifts));
            localStorage.setItem('sanveesApprovedLeaves', JSON.stringify(approvedLeaves));
            localStorage.setItem('sanveesWeekendExchanges', JSON.stringify(weekendExchanges));

            renderDailyTable();
            if (activeView === 'monthly') renderMonthlyTable();

            updateFirebaseLastSyncTime();
            isRemoteUpdateInProgress = false;
        }

        function syncAllDataToFirebase() {
            if (!isFirebaseConnected || !firebaseDb || isRemoteUpdateInProgress) return;

            const payload = {
                moderators,
                attendanceHistory,
                nightShifts: scheduledNightShifts,
                leaves: approvedLeaves,
                exchanges: weekendExchanges,
                lastUpdated: new Date().toISOString()
            };

            firebaseDb.ref('sanvees_portal').set(payload)
                .then(() => updateFirebaseLastSyncTime())
                .catch((err) => console.warn('Firebase Sync Error:', err));
        }

        function updateFirebaseStatusUI(connected, text) {
            const statusEl = document.getElementById('firebase-modal-status-text');
            if (statusEl) {
                statusEl.innerText = connected ? `🟢 ${text}` : `⚪ ${text}`;
                statusEl.className = connected ? "font-bold text-xs text-emerald-600 dark:text-emerald-400" : "font-bold text-xs text-slate-500";
            }
        }

        function updateFirebaseLastSyncTime() {
            const el = document.getElementById('firebase-last-sync-time');
            if (el) {
                const now = new Date();
                el.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            }
        }

        function openFirebaseModal() {
            if (currentUserRole === 'moderator') {
                showToast('Database settings are restricted to In-Charge Admin.', 'info');
                return;
            }
            const config = getFirebaseConfig();
            document.getElementById('firebase-input-config').value = config.databaseURL || DEFAULT_FIREBASE_CONFIG.databaseURL;
            document.getElementById('firebase-autosync-toggle').checked = isFirebaseAutoSync;
            document.getElementById('firebase-modal').classList.remove('hidden');
        }

        function closeFirebaseModal() {
            document.getElementById('firebase-modal').classList.add('hidden');
        }

        function handleSaveFirebaseConfig(e) {
            e.preventDefault();
            if (currentUserRole === 'moderator') {
                showToast('Database configuration is restricted to In-Charge Admin.', 'info');
                return;
            }
            const url = document.getElementById('firebase-input-config').value.trim();
            const config = { ...DEFAULT_FIREBASE_CONFIG, databaseURL: url };
            localStorage.setItem('sanvees_firebase_config', JSON.stringify(config));
            initFirebaseConnection(true);
            syncAllDataToFirebase();
            closeFirebaseModal();
        }

        function handleManualSyncToFirebase() {
            if (currentUserRole === 'moderator') {
                showToast('Database synchronization is restricted to In-Charge Admin.', 'info');
                return;
            }
            syncAllDataToFirebase();
            showToast("Force Cloud Sync Completed!", "success");
        }

        function handleToggleFirebaseAutoSync(val) {
            if (currentUserRole === 'moderator') {
                showToast('Database settings are restricted to In-Charge Admin.', 'info');
                return;
            }
            isFirebaseAutoSync = val;
            showToast(val ? "Auto-Sync Enabled" : "Auto-Sync Paused", "info");
        }

        // ======================= DATA STORAGE & SERIALIZATION =======================
        function saveToLocalStorage() {
            localStorage.setItem('sanveesModeratorsList', JSON.stringify(moderators));
            localStorage.setItem('sanveesAttendanceHistory', JSON.stringify(attendanceHistory));
            localStorage.setItem('sanveesNightShifts', JSON.stringify(scheduledNightShifts));
            localStorage.setItem('sanveesApprovedLeaves', JSON.stringify(approvedLeaves));
            localStorage.setItem('sanveesWeekendExchanges', JSON.stringify(weekendExchanges));

            if (isFirebaseAutoSync && isFirebaseConnected) {
                syncAllDataToFirebase();
            }
        }

        function loadFromLocalStorage() {
            const savedMods = localStorage.getItem('sanveesModeratorsList');
            if (savedMods) {
                try { moderators = JSON.parse(savedMods); } catch(e) { moderators = [...DEFAULT_MODERATORS]; }
            } else {
                moderators = [...DEFAULT_MODERATORS];
            }

            const savedAtt = localStorage.getItem('sanveesAttendanceHistory');
            if (savedAtt) {
                try { attendanceHistory = JSON.parse(savedAtt); } catch(e) { attendanceHistory = {}; }
            } else { attendanceHistory = {}; }

            const savedNight = localStorage.getItem('sanveesNightShifts');
            if (savedNight) {
                try { scheduledNightShifts = JSON.parse(savedNight); } catch(e) { scheduledNightShifts = []; }
            } else { scheduledNightShifts = []; }

            // Automatic one-time cleanup of previously auto-assigned night shifts so user can manually assign fresh
            const isNightResetDone = localStorage.getItem('sanvees_night_shifts_manual_clean_v1');
            if (!isNightResetDone) {
                scheduledNightShifts = [];
                Object.keys(attendanceHistory).forEach(dateStr => {
                    const dayName = getDayNameForDate(dateStr);
                    moderators.forEach(mod => {
                        const modKey = String(mod.sl);
                        if (attendanceHistory[dateStr] && attendanceHistory[dateStr][modKey] === 'Night Shift') {
                            attendanceHistory[dateStr][modKey] = (mod.weekend.toLowerCase() === dayName.toLowerCase()) ? 'Weekly Off' : 'Present';
                        }
                    });
                });
                localStorage.setItem('sanveesNightShifts', JSON.stringify([]));
                localStorage.setItem('sanveesAttendanceHistory', JSON.stringify(attendanceHistory));
                localStorage.setItem('sanvees_night_shifts_manual_clean_v1', 'true');
            }

            const savedLeaves = localStorage.getItem('sanveesApprovedLeaves');
            if (savedLeaves) {
                try { approvedLeaves = JSON.parse(savedLeaves); } catch(e) { approvedLeaves = []; }
            } else { approvedLeaves = []; }

            const savedExchanges = localStorage.getItem('sanveesWeekendExchanges');
            if (savedExchanges) {
                try { weekendExchanges = JSON.parse(savedExchanges); } catch(e) { weekendExchanges = []; }
            } else { weekendExchanges = []; }

            sortAndReindexModerators();
            sanitizeAndMigrateAttendanceHistory();

            currentActiveDate = getTodayDateStr();
            currentActiveMonth = getCurrentMonthStr();

            initAttendanceForDate(currentActiveDate);
            saveToLocalStorage();
        }

        // Sort moderators strictly according to Sanvee's work week order: Saturday (0) -> Friday (6)
        function sortAndReindexModerators() {
            if (!Array.isArray(moderators) || moderators.length === 0) return;

            moderators.forEach((m, idx) => {
                if (!m.id) {
                    const cleanPhone = m.phone ? m.phone.replace(/\D/g, '') : '';
                    m.id = 'mod_' + (cleanPhone || Date.now()) + '_' + idx + '_' + Math.random().toString(36).substring(2, 7);
                }
                m._tempSortIdx = idx;
                m._oldSl = m.sl;
            });

            moderators.sort((a, b) => {
                const orderA = WEEKEND_DAY_ORDER[a.weekend] !== undefined ? WEEKEND_DAY_ORDER[a.weekend] : 99;
                const orderB = WEEKEND_DAY_ORDER[b.weekend] !== undefined ? WEEKEND_DAY_ORDER[b.weekend] : 99;
                if (orderA !== orderB) return orderA - orderB;
                const slA = a.sl !== undefined && a.sl !== null ? a.sl : 9999;
                const slB = b.sl !== undefined && b.sl !== null ? b.sl : 9999;
                if (slA !== slB) return slA - slB;
                return (a._tempSortIdx || 0) - (b._tempSortIdx || 0);
            });

            const slMapping = {};
            moderators.forEach((m, index) => {
                const oldSl = m._oldSl;
                const newSl = index + 1;
                delete m._tempSortIdx;
                delete m._oldSl;
                m.sl = newSl;
                if (oldSl !== undefined && oldSl !== null && oldSl !== newSl) {
                    slMapping[oldSl] = newSl;
                }
            });

            // Maintain stable modKey in attendance records and synchronize numeric SL aliases
            if (attendanceHistory && typeof attendanceHistory === 'object') {
                Object.keys(attendanceHistory).forEach(date => {
                    const dayRecords = attendanceHistory[date];
                    if (dayRecords && typeof dayRecords === 'object' && !Array.isArray(dayRecords)) {
                        moderators.forEach(m => {
                            const modKey = getModeratorKey(m);
                            const oldSlKey = Object.keys(slMapping).find(k => slMapping[k] === m.sl);
                            if (oldSlKey && dayRecords[oldSlKey] && !dayRecords[modKey]) {
                                dayRecords[modKey] = dayRecords[oldSlKey];
                            }
                            if (dayRecords[modKey]) {
                                dayRecords[String(m.sl)] = dayRecords[modKey];
                            }
                        });
                    }
                });
            }

            if (Object.keys(slMapping).length > 0) {
                if (Array.isArray(scheduledNightShifts)) {
                    scheduledNightShifts.forEach(item => {
                        if (item.modSl && slMapping[item.modSl]) item.modSl = slMapping[item.modSl];
                        if (item.sl && slMapping[item.sl]) item.sl = slMapping[item.sl];
                    });
                }

                if (Array.isArray(approvedLeaves)) {
                    approvedLeaves.forEach(item => {
                        if (item.modSl && slMapping[item.modSl]) item.modSl = slMapping[item.modSl];
                    });
                }

                if (Array.isArray(weekendExchanges)) {
                    weekendExchanges.forEach(item => {
                        if (item.modSl && slMapping[item.modSl]) item.modSl = slMapping[item.modSl];
                    });
                }

                if (Array.isArray(nightShiftRequests)) {
                    nightShiftRequests.forEach(item => {
                        if (item.modSl && slMapping[item.modSl]) item.modSl = slMapping[item.modSl];
                    });
                }

                if (typeof currentLoggedInModSl !== 'undefined' && currentLoggedInModSl && slMapping[currentLoggedInModSl]) {
                    currentLoggedInModSl = slMapping[currentLoggedInModSl];
                }
            }
        }

        function calculatePredictedSlForWeekend(targetWeekend, ignoreIndex = -1) {
            const targetOrder = WEEKEND_DAY_ORDER[targetWeekend] !== undefined ? WEEKEND_DAY_ORDER[targetWeekend] : 99;
            let count = 0;
            moderators.forEach((m, idx) => {
                if (idx === ignoreIndex) return;
                const mOrder = WEEKEND_DAY_ORDER[m.weekend] !== undefined ? WEEKEND_DAY_ORDER[m.weekend] : 99;
                if (mOrder <= targetOrder) count++;
            });
            return count + 1;
        }

        function updateFormCalculatedSl() {
            const editIndex = parseInt(document.getElementById('form-edit-index').value, 10);
            const weekendVal = document.getElementById('form-weekend').value;
            const slInput = document.getElementById('form-sl');
            const slHint = document.getElementById('form-sl-hint');

            if (editIndex >= 0) {
                const mod = moderators[editIndex];
                if (mod && mod.weekend === weekendVal) {
                    slInput.value = mod.sl;
                    if (slHint) slHint.innerText = `Current position: SL #${String(mod.sl).padStart(2, '0')} (${mod.weekend} Off group)`;
                } else {
                    const predictedSl = calculatePredictedSlForWeekend(weekendVal, editIndex);
                    slInput.value = predictedSl;
                    if (slHint) slHint.innerText = `Will move to ${weekendVal} Off serial (SL #${String(predictedSl).padStart(2, '0')})`;
                }
            } else {
                const predictedSl = calculatePredictedSlForWeekend(weekendVal, -1);
                slInput.value = predictedSl;
                if (slHint) slHint.innerText = `Auto-assigned to ${weekendVal} Off serial (SL #${String(predictedSl).padStart(2, '0')})`;
            }
        }

        const _dayNameCache = {};
        function getDayNameForDate(dateStr) {
            if (_dayNameCache[dateStr]) return _dayNameCache[dateStr];
            const [y, m, d] = dateStr.split('-').map(Number);
            const dateObj = new Date(y, m - 1, d);
            const name = DAYS_MAP[dateObj.getDay()];
            _dayNameCache[dateStr] = name;
            return name;
        }

        function getTodayDateStr() {
            const now = new Date();
            const y = now.getFullYear();
            const m = String(now.getMonth() + 1).padStart(2, '0');
            const d = String(now.getDate()).padStart(2, '0');
            return `${y}-${m}-${d}`;
        }

        function getCurrentMonthStr() {
            const now = new Date();
            const y = now.getFullYear();
            const m = String(now.getMonth() + 1).padStart(2, '0');
            return `${y}-${m}`;
        }

        function getDatesInRange(startDateStr, endDateStr) {
            const dates = [];
            const [sY, sM, sD] = startDateStr.split('-').map(Number);
            const [eY, eM, eD] = endDateStr.split('-').map(Number);
            const curr = new Date(sY, sM - 1, sD);
            const end = new Date(eY, eM - 1, eD);
            while (curr <= end) {
                const y = curr.getFullYear();
                const m = String(curr.getMonth() + 1).padStart(2, '0');
                const d = String(curr.getDate()).padStart(2, '0');
                dates.push(`${y}-${m}-${d}`);
                curr.setDate(curr.getDate() + 1);
            }
            return dates;
        }

        function calculateTenure(joinDateStr, asOfDateStr = null) {
            if (!joinDateStr || typeof joinDateStr !== 'string') return "";
            let jD, jM, jY;
            if (joinDateStr.includes('-')) {
                const parts = joinDateStr.split('-');
                if (parts[0].length === 4) {
                    jY = parseInt(parts[0], 10);
                    jM = parseInt(parts[1], 10);
                    jD = parseInt(parts[2], 10);
                } else {
                    jD = parseInt(parts[0], 10);
                    jM = parseInt(parts[1], 10);
                    jY = parseInt(parts[2], 10);
                }
            } else { return ""; }

            const startDate = new Date(jY, jM - 1, jD);
            let endDate = asOfDateStr ? new Date(asOfDateStr.split('-')[0], asOfDateStr.split('-')[1] - 1, asOfDateStr.split('-')[2]) : new Date();

            if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return "";
            if (startDate > endDate) return "Just Joined";

            let years = endDate.getFullYear() - startDate.getFullYear();
            let months = endDate.getMonth() - startDate.getMonth();
            let days = endDate.getDate() - startDate.getDate();

            if (days < 0) {
                months--;
                const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
                days += prevMonth.getDate();
            }
            if (months < 0) {
                years--;
                months += 12;
            }

            const parts = [];
            if (years > 0) parts.push(`${years}y`);
            if (months > 0) parts.push(`${months}m`);
            if (days > 0 || parts.length === 0) parts.push(`${days}d`);
            return parts.join(' ');
        }

        function updateFormTenurePreview() {
            const joinVal = document.getElementById('form-join').value.trim();
            const previewEl = document.getElementById('form-tenure-preview');
            if (previewEl) previewEl.innerText = calculateTenure(joinVal, currentActiveDate) || "--";
        }

        function getModeratorKey(mod) {
            if (!mod) return '';
            if (mod._cachedKey) return mod._cachedKey;
            if (mod.id) mod._cachedKey = String(mod.id);
            else if (mod.phone) mod._cachedKey = 'mod_' + String(mod.phone).replace(/\D/g, '');
            else mod._cachedKey = 'mod_sl_' + String(mod.sl);
            return mod._cachedKey;
        }

        let _hasSanitizedAttendance = false;
        function sanitizeAndMigrateAttendanceHistory() {
            if (_hasSanitizedAttendance) return;
            if (!attendanceHistory || typeof attendanceHistory !== 'object' || !Array.isArray(moderators) || moderators.length === 0) return;
            _hasSanitizedAttendance = true;

            let modified = false;

            // Robust 1-to-1 mapping for standard 26 moderators; fallback mapping for legacy 24 schema
            const isLegacy24Schema = (moderators.length === 24);
            const old26ToModMap = {};
            if (isLegacy24Schema) {
                const legacy24Map = {
                    1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
                    11: 11, 12: 12, 13: 13, 14: 14, 15: 14, 16: 15, 17: 16, 18: 17, 19: 17,
                    20: 18, 21: 19, 22: 20, 23: 21, 24: 22, 25: 23, 26: 24
                };
                Object.keys(legacy24Map).forEach(k => {
                    old26ToModMap[k] = moderators.find(m => m.sl === legacy24Map[k]);
                });
            } else {
                for (let i = 1; i <= moderators.length; i++) {
                    old26ToModMap[i] = moderators.find(m => m.sl === i) || moderators[i - 1];
                }
            }

            Object.keys(attendanceHistory).forEach(dateStr => {
                const dayRecords = attendanceHistory[dateStr];
                if (!dayRecords) return;

                const dayName = getDayNameForDate(dateStr);
                const isArray = Array.isArray(dayRecords);
                const keys = Object.keys(dayRecords);
                const isOld26Array = isArray && dayRecords.length >= 26;
                const hasOld26Keys = !isArray && keys.some(k => parseInt(k, 10) >= 25);
                const hasOnlyNumericKeys = isArray || (keys.length > 0 && keys.every(k => /^\d+$/.test(k)));

                if (isArray || isOld26Array || hasOld26Keys || hasOnlyNumericKeys) {
                    modified = true;
                    const newDayRecords = {};

                    if (isOld26Array || hasOld26Keys || hasOnlyNumericKeys) {
                        Object.keys(old26ToModMap).forEach(oldIdxStr => {
                            const oldIdx = parseInt(oldIdxStr, 10);
                            const targetMod = old26ToModMap[oldIdx];
                            if (!targetMod) return;

                            let status = isArray ? (dayRecords[oldIdx] || dayRecords[oldIdx - 1]) : dayRecords[oldIdxStr];
                            const modKey = getModeratorKey(targetMod);
                            const isScheduledWeekend = targetMod.weekend && dayName && (targetMod.weekend.toLowerCase() === dayName.toLowerCase());

                            // Check approved leaves (by dates array or startDate..endDate range)
                            const hasApprovedLeave = approvedLeaves && approvedLeaves.some(l => {
                                const isMod = (l.modSl ? l.modSl === targetMod.sl : (l.modId ? l.modId === targetMod.id : (l.modPhone === targetMod.phone || l.modName === targetMod.name)));
                                if (!isMod) return false;
                                return (l.leaveDates && l.leaveDates.includes(dateStr)) || (l.startDate && l.endDate && dateStr >= l.startDate && dateStr <= l.endDate);
                            });

                            // Check scheduled night shifts
                            const hasNightShift = scheduledNightShifts && scheduledNightShifts.some(s => {
                                const isMod = (s.modSl ? s.modSl === targetMod.sl : (s.modId ? s.modId === targetMod.id : (s.modPhone === targetMod.phone || s.modName === targetMod.name)));
                                if (!isMod) return false;
                                return (s.nightDutyDates && s.nightDutyDates.includes(dateStr)) || (s.startDate && s.endDate && dateStr >= s.startDate && dateStr <= s.endDate);
                            });

                            if (hasApprovedLeave) {
                                status = 'Leave';
                            } else if (hasNightShift) {
                                status = 'Night Shift';
                            }
                            // Check weekend exchanges
                            else if (weekendExchanges && weekendExchanges.some(x => (x.modSl ? x.modSl === targetMod.sl : x.modPhone === targetMod.phone) && x.dutyDate === dateStr)) {
                                status = 'Present';
                            }
                            else if (weekendExchanges && weekendExchanges.some(x => (x.modSl ? x.modSl === targetMod.sl : x.modPhone === targetMod.phone) && x.offDate === dateStr)) {
                                status = 'Weekly Off';
                            }
                            // Re-align default status so scheduled day off strictly applies
                            else if (!status || status === 'Present' || status === 'Weekly Off') {
                                status = isScheduledWeekend ? 'Weekly Off' : 'Present';
                            }

                            newDayRecords[modKey] = status;
                            newDayRecords[String(targetMod.sl)] = status;
                        });
                    } else {
                        moderators.forEach(m => {
                            const modKey = getModeratorKey(m);
                            const slKey = String(m.sl);
                            let status = dayRecords[modKey] || dayRecords[slKey];
                            const isScheduledWeekend = m.weekend && dayName && (m.weekend.toLowerCase() === dayName.toLowerCase());

                            const hasApprovedLeave = approvedLeaves && approvedLeaves.some(l => {
                                const isMod = (l.modSl ? l.modSl === m.sl : (l.modId ? l.modId === m.id : (l.modPhone === m.phone || l.modName === m.name)));
                                if (!isMod) return false;
                                return (l.leaveDates && l.leaveDates.includes(dateStr)) || (l.startDate && l.endDate && dateStr >= l.startDate && dateStr <= l.endDate);
                            });

                            const hasNightShift = scheduledNightShifts && scheduledNightShifts.some(s => {
                                const isMod = (s.modSl ? s.modSl === m.sl : (s.modId ? s.modId === m.id : (s.modPhone === m.phone || s.modName === m.name)));
                                if (!isMod) return false;
                                return (s.nightDutyDates && s.nightDutyDates.includes(dateStr)) || (s.startDate && s.endDate && dateStr >= s.startDate && dateStr <= s.endDate);
                            });

                            if (hasApprovedLeave) {
                                status = 'Leave';
                            } else if (hasNightShift) {
                                status = 'Night Shift';
                            } else if (weekendExchanges && weekendExchanges.some(x => (x.modSl ? x.modSl === m.sl : x.modPhone === m.phone) && x.dutyDate === dateStr)) {
                                status = 'Present';
                            } else if (weekendExchanges && weekendExchanges.some(x => (x.modSl ? x.modSl === m.sl : x.modPhone === m.phone) && x.offDate === dateStr)) {
                                status = 'Weekly Off';
                            } else if (!status || status === 'Present' || status === 'Weekly Off') {
                                status = isScheduledWeekend ? 'Weekly Off' : 'Present';
                            }

                            newDayRecords[modKey] = status;
                            newDayRecords[slKey] = status;
                        });
                    }

                    attendanceHistory[dateStr] = newDayRecords;
                } else {
                    moderators.forEach(m => {
                        const modKey = getModeratorKey(m);
                        const slKey = String(m.sl);
                        if (dayRecords[modKey] && !dayRecords[slKey]) {
                            dayRecords[slKey] = dayRecords[modKey];
                        } else if (dayRecords[slKey] && !dayRecords[modKey]) {
                            dayRecords[modKey] = dayRecords[slKey];
                        }
                    });
                }
            });

            if (modified) {
                saveToLocalStorage();
            }
        }

        function initAttendanceForDate(dateStr) {
            if (attendanceHistory[dateStr] && !Array.isArray(attendanceHistory[dateStr]) && attendanceHistory[dateStr]._initialized) {
                return;
            }
            if (!attendanceHistory[dateStr] || Array.isArray(attendanceHistory[dateStr])) {
                sanitizeAndMigrateAttendanceHistory();
            }
            if (!attendanceHistory[dateStr] || Array.isArray(attendanceHistory[dateStr])) {
                attendanceHistory[dateStr] = {};
            }
            const dayName = getDayNameForDate(dateStr);
            const dayRecords = attendanceHistory[dateStr];
            for (let i = 0; i < moderators.length; i++) {
                const mod = moderators[i];
                const modKey = getModeratorKey(mod);
                const slKey = String(mod.sl);
                const hasRecord = (dayRecords[modKey] !== undefined) || (dayRecords[slKey] !== undefined);
                if (!hasRecord) {
                    const isWeekend = mod.weekend && dayName && (mod.weekend.toLowerCase() === dayName.toLowerCase());
                    let defaultStatus = isWeekend ? 'Weekly Off' : 'Present';

                    // Check approved leave for this date
                    const hasApprovedLeave = approvedLeaves && approvedLeaves.some(l => {
                        const isMod = (l.modSl ? l.modSl === mod.sl : (l.modId ? l.modId === mod.id : (l.modPhone === mod.phone || l.modName === mod.name)));
                        if (!isMod) return false;
                        return (l.leaveDates && l.leaveDates.includes(dateStr)) || (l.startDate && l.endDate && dateStr >= l.startDate && dateStr <= l.endDate);
                    });

                    // Check scheduled night shift for this date
                    const hasNightShift = scheduledNightShifts && scheduledNightShifts.some(s => {
                        const isMod = (s.modSl ? s.modSl === mod.sl : (s.modId ? s.modId === mod.id : (s.modPhone === mod.phone || s.modName === mod.name)));
                        if (!isMod) return false;
                        return (s.nightDutyDates && s.nightDutyDates.includes(dateStr)) || (s.startDate && s.endDate && dateStr >= s.startDate && dateStr <= s.endDate);
                    });

                    // Check weekend exchange
                    const hasExchangeDuty = weekendExchanges && weekendExchanges.some(x => (x.modSl ? x.modSl === mod.sl : x.modPhone === mod.phone) && x.dutyDate === dateStr);
                    const hasExchangeOff = weekendExchanges && weekendExchanges.some(x => (x.modSl ? x.modSl === mod.sl : x.modPhone === mod.phone) && x.offDate === dateStr);

                    if (hasApprovedLeave) {
                        defaultStatus = 'Leave';
                    } else if (hasNightShift) {
                        defaultStatus = 'Night Shift';
                    } else if (hasExchangeDuty) {
                        defaultStatus = 'Present';
                    } else if (hasExchangeOff) {
                        defaultStatus = 'Weekly Off';
                    }

                    dayRecords[modKey] = defaultStatus;
                    dayRecords[slKey] = defaultStatus;
                } else if (dayRecords[modKey] !== undefined) {
                    dayRecords[slKey] = dayRecords[modKey];
                } else if (dayRecords[slKey] !== undefined) {
                    dayRecords[modKey] = dayRecords[slKey];
                }
            }
            dayRecords._initialized = true;
        }

        function getModeratorStatusForDate(mod, dateStr) {
            if (!mod) return 'Present';
            initAttendanceForDate(dateStr);
            const dayRecords = attendanceHistory[dateStr];
            const dayName = getDayNameForDate(dateStr);
            const isScheduledWeekend = mod.weekend && dayName && (mod.weekend.toLowerCase() === dayName.toLowerCase());
            const defaultStatus = isScheduledWeekend ? 'Weekly Off' : 'Present';

            if (!dayRecords) return defaultStatus;

            const modKey = getModeratorKey(mod);
            const slKey = String(mod.sl);

            if (dayRecords[modKey] !== undefined && dayRecords[modKey] !== null) {
                return dayRecords[modKey];
            }
            if (dayRecords[slKey] !== undefined && dayRecords[slKey] !== null) {
                return dayRecords[slKey];
            }
            if (mod.phone && dayRecords[mod.phone] !== undefined) {
                return dayRecords[mod.phone];
            }

            return defaultStatus;
        }

        function setModeratorStatusForDate(mod, dateStr, status) {
            if (!mod) return;
            initAttendanceForDate(dateStr);
            const modKey = getModeratorKey(mod);
            attendanceHistory[dateStr][modKey] = status;
            attendanceHistory[dateStr][String(mod.sl)] = status;
            saveToLocalStorage();
        }

        // ======================= VIEW & NAVIGATION HANDLERS (60FPS INSTANT) =======================
        function switchView(view) {
            activeView = view;
            const dailyBtn = document.getElementById('btn-view-daily');
            const monthlyBtn = document.getElementById('btn-view-monthly');
            const appointmentBtn = document.getElementById('btn-view-appointment');
            const dailyContainer = document.getElementById('view-daily-container');
            const monthlyContainer = document.getElementById('view-monthly-container');
            const appointmentContainer = document.getElementById('view-appointment-container');
            const mainCanvas = document.getElementById('main-content-canvas');

            const dockDaily = document.getElementById('dock-btn-daily');
            const dockMonthly = document.getElementById('dock-btn-monthly');
            const dockAppointment = document.getElementById('dock-btn-appointment');

            const activeBtnClass = "px-5 py-2 rounded-xl font-display font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md cursor-pointer";
            const inactiveBtnClass = "px-5 py-2 rounded-xl font-display font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer";

            const activeDockClass = "flex flex-col items-center gap-1 text-sky-500 font-bold text-[10px] cursor-pointer";
            const inactiveDockClass = "flex flex-col items-center gap-1 text-slate-500 dark:text-slate-400 font-bold text-[10px] cursor-pointer";

            if (dailyBtn) dailyBtn.className = inactiveBtnClass;
            if (monthlyBtn) monthlyBtn.className = inactiveBtnClass;
            if (appointmentBtn) appointmentBtn.className = inactiveBtnClass;

            if (dockDaily) dockDaily.className = inactiveDockClass;
            if (dockMonthly) dockMonthly.className = inactiveDockClass;
            if (dockAppointment) dockAppointment.className = inactiveDockClass;

            if (dailyContainer) dailyContainer.classList.add('hidden');
            if (monthlyContainer) monthlyContainer.classList.add('hidden');
            if (appointmentContainer) appointmentContainer.classList.add('hidden');

            if (view === 'daily') {
                if (dailyBtn) dailyBtn.className = activeBtnClass;
                if (dockDaily) dockDaily.className = activeDockClass;
                if (dailyContainer) {
                    dailyContainer.classList.remove('hidden');
                    dailyContainer.classList.remove('view-fade-slide');
                    requestAnimationFrame(() => dailyContainer.classList.add('view-fade-slide'));
                }
                if (mainCanvas) mainCanvas.className = "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8";
                renderDailyTable();
            } else if (view === 'monthly') {
                if (monthlyBtn) monthlyBtn.className = activeBtnClass;
                if (dockMonthly) dockMonthly.className = activeDockClass;
                if (monthlyContainer) {
                    monthlyContainer.classList.remove('hidden');
                    monthlyContainer.classList.remove('view-fade-slide');
                    requestAnimationFrame(() => monthlyContainer.classList.add('view-fade-slide'));
                }
                if (mainCanvas) mainCanvas.className = "flex-1 max-w-[98%] xl:max-w-[98%] 2xl:max-w-[98%] w-full mx-auto px-2 sm:px-4 lg:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8";
                renderMonthlyTable();
            } else if (view === 'appointment') {
                if (appointmentBtn) appointmentBtn.className = activeBtnClass;
                if (dockAppointment) dockAppointment.className = activeDockClass;
                if (appointmentContainer) {
                    appointmentContainer.classList.remove('hidden');
                    appointmentContainer.classList.remove('view-fade-slide');
                    requestAnimationFrame(() => appointmentContainer.classList.add('view-fade-slide'));
                }
                if (mainCanvas) mainCanvas.className = "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8";
                initAppointmentView();
            }

            applyPrintOrientationSettings();
            applyRolePermissions();
        }

        // ======================= APPOINTMENT LETTER & COMPANY PAD ENGINE =======================
        const DEFAULT_APPOINTMENT_STATE = {
            selectedModSl: "",
            candidateName: "Md Sharif Hossain",
            salutation: "Sharif Hossain",
            issueDate: "2026-08-18",
            effectiveDate: "2026-08-09",
            reference: "SBT/HR/2026/01",
            subject: "Appointment as Moderator",
            trainingSalary: "10,000 BDT",
            basicSalary: "14000 BDT",
            noticePeriod: "two months",
            signatory: "General Manager",
            company: "Sanvee's By Tony",
            location: "Head Office",
            padMode: "with-bg",
            font: "sans",
            zoom: 1.0
        };

        let appointmentState = { ...DEFAULT_APPOINTMENT_STATE };

        function formatToDisplayDate(dateStr) {
            if (!dateStr) return "";
            if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) return dateStr;
            if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
                const parts = dateStr.split('-');
                return `${parts[2]}-${parts[1]}-${parts[0]}`;
            }
            return dateStr;
        }

        function formatToFormalDate(dateStr) {
            if (!dateStr) return "";
            let d, m, y;
            if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
                const parts = dateStr.split('-');
                y = parts[0];
                m = parseInt(parts[1], 10) - 1;
                d = parts[2];
            } else if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
                const parts = dateStr.split('-');
                d = parts[0];
                m = parseInt(parts[1], 10) - 1;
                y = parts[2];
            } else {
                return dateStr;
            }
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            const mName = monthNames[m] || 'Month';
            return `${d} ${mName}, ${y}`;
        }

        function parseToInputDate(dateStr) {
            if (!dateStr) return "";
            if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
            if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
                const parts = dateStr.split('-');
                return `${parts[2]}-${parts[1]}-${parts[0]}`;
            }
            return "";
        }

        function initAppointmentView() {
            const selectEl = document.getElementById('appointment-mod-select');
            if (selectEl) {
                const currentVal = selectEl.value;
                selectEl.innerHTML = `
                    <option value="">-- Choose Moderator to Auto-Fill --</option>
                    <option value="custom">✍️ Custom Candidate (Manual Entry)</option>
                `;
                moderators.forEach(mod => {
                    const opt = document.createElement('option');
                    opt.value = String(mod.sl);
                    opt.innerText = `[SL ${mod.sl}] ${mod.name} (Joined: ${mod.join || '--'})`;
                    selectEl.appendChild(opt);
                });
                if (currentVal) selectEl.value = currentVal;
            }

            const nameInput = document.getElementById('appointment-input-name');
            if (nameInput && !nameInput.value) {
                resetAppointmentToDefault(true);
            } else {
                updateAppointmentPreview();
            }
            resetAppointmentZoom();
        }

        function handleAppointmentModSelect(modSl) {
            if (!modSl || modSl === 'custom') {
                appointmentState.selectedModSl = 'custom';
                const pillSl = document.getElementById('app-info-sl');
                const pillName = document.getElementById('app-info-name');
                const pillPhone = document.getElementById('app-info-phone');
                const pillJoin = document.getElementById('app-info-join');
                if (pillSl) pillSl.innerText = '--';
                if (pillName) pillName.innerText = 'Custom Entry';
                if (pillPhone) pillPhone.innerText = 'Phone: Manual';
                if (pillJoin) pillJoin.innerText = 'Manual';
                return;
            }

            const mod = moderators.find(m => String(m.sl) === String(modSl));
            if (!mod) return;

            appointmentState.selectedModSl = String(mod.sl);
            appointmentState.candidateName = mod.name;
            
            let salutation = mod.name.trim();
            if (salutation.toLowerCase().startsWith('md ') || salutation.toLowerCase().startsWith('md. ')) {
                salutation = salutation.substring(3).trim();
            }
            appointmentState.salutation = salutation;

            const todayStr = getTodayDateStr();
            appointmentState.issueDate = todayStr;
            
            if (mod.join) {
                appointmentState.effectiveDate = parseToInputDate(mod.join);
            } else {
                appointmentState.effectiveDate = todayStr;
            }

            const year = todayStr.substring(0, 4) || '2026';
            appointmentState.reference = `SBT/HR/${year}/MOD-${String(mod.sl).padStart(2, '0')}`;

            const nameIn = document.getElementById('appointment-input-name');
            const salutationIn = document.getElementById('appointment-input-salutation');
            const dateIn = document.getElementById('appointment-input-date');
            const effectiveDateIn = document.getElementById('appointment-input-effective-date');
            const refIn = document.getElementById('appointment-input-ref');

            if (nameIn) nameIn.value = appointmentState.candidateName;
            if (salutationIn) salutationIn.value = appointmentState.salutation;
            if (dateIn) dateIn.value = appointmentState.issueDate;
            if (effectiveDateIn) effectiveDateIn.value = appointmentState.effectiveDate;
            if (refIn) refIn.value = appointmentState.reference;

            const pillSl = document.getElementById('app-info-sl');
            const pillName = document.getElementById('app-info-name');
            const pillPhone = document.getElementById('app-info-phone');
            const pillJoin = document.getElementById('app-info-join');
            if (pillSl) pillSl.innerText = `#${mod.sl}`;
            if (pillName) pillName.innerText = mod.name;
            if (pillPhone) pillPhone.innerText = `Phone: ${mod.phone || '--'}`;
            if (pillJoin) pillJoin.innerText = mod.join || '--';

            updateAppointmentPreview();
            showToast(`Appointment Letter ready for ${mod.name}`, 'success');
        }

        function handleAppointmentInputUpdate() {
            const nameIn = document.getElementById('appointment-input-name');
            const salutationIn = document.getElementById('appointment-input-salutation');
            const dateIn = document.getElementById('appointment-input-date');
            const effectiveDateIn = document.getElementById('appointment-input-effective-date');
            const refIn = document.getElementById('appointment-input-ref');
            const subjectIn = document.getElementById('appointment-input-subject');
            const trainingSalaryIn = document.getElementById('appointment-input-training-salary');
            const basicSalaryIn = document.getElementById('appointment-input-basic-salary');
            const noticePeriodIn = document.getElementById('appointment-input-notice-period');
            const signatoryIn = document.getElementById('appointment-input-signatory');
            const locationIn = document.getElementById('appointment-input-location');

            if (nameIn) appointmentState.candidateName = nameIn.value;
            if (salutationIn) appointmentState.salutation = salutationIn.value;
            if (dateIn) appointmentState.issueDate = dateIn.value;
            if (effectiveDateIn) appointmentState.effectiveDate = effectiveDateIn.value;
            if (refIn) appointmentState.reference = refIn.value;
            if (subjectIn) appointmentState.subject = subjectIn.value;
            if (trainingSalaryIn) appointmentState.trainingSalary = trainingSalaryIn.value;
            if (basicSalaryIn) appointmentState.basicSalary = basicSalaryIn.value;
            if (noticePeriodIn) appointmentState.noticePeriod = noticePeriodIn.value;
            if (signatoryIn) appointmentState.signatory = signatoryIn.value;
            if (locationIn) appointmentState.location = locationIn.value;

            updateAppointmentPreview();
        }

        function updateAppointmentPreview() {
            const sheetDate = document.getElementById('sheet-date');
            const sheetRef = document.getElementById('sheet-ref');
            const sheetCandidateName = document.getElementById('sheet-candidate-name');
            const sheetSubject = document.getElementById('sheet-subject');
            const sheetSalutation = document.getElementById('sheet-salutation');
            const sheetEffectiveDate = document.getElementById('sheet-effective-date');
            const sheetNoticePeriod = document.getElementById('sheet-notice-period');
            const sheetTrainingSalary = document.getElementById('sheet-training-salary');
            const sheetBasicSalary = document.getElementById('sheet-basic-salary');
            const sheetSignatory = document.getElementById('sheet-signatory');
            const sheetLocation = document.getElementById('sheet-location');

            if (sheetDate) sheetDate.innerText = formatToDisplayDate(appointmentState.issueDate);
            if (sheetRef) sheetRef.innerText = appointmentState.reference || 'SBT/HR/2026/01';
            if (sheetCandidateName) sheetCandidateName.innerText = appointmentState.candidateName || 'Candidate Name';
            if (sheetSubject) sheetSubject.innerText = appointmentState.subject || 'Appointment as Moderator';
            if (sheetSalutation) sheetSalutation.innerText = appointmentState.salutation || appointmentState.candidateName || 'Candidate';
            if (sheetEffectiveDate) sheetEffectiveDate.innerText = formatToFormalDate(appointmentState.effectiveDate);
            if (sheetNoticePeriod) sheetNoticePeriod.innerText = appointmentState.noticePeriod || 'two months';
            if (sheetTrainingSalary) sheetTrainingSalary.innerText = appointmentState.trainingSalary || '10,000 BDT';
            if (sheetBasicSalary) sheetBasicSalary.innerText = appointmentState.basicSalary || '14000 BDT';
            if (sheetSignatory) sheetSignatory.innerText = appointmentState.signatory || 'General Manager';
            if (sheetLocation) sheetLocation.innerText = appointmentState.location || 'Head Office';
        }

        function setAppointmentPadMode(mode) {
            appointmentState.padMode = mode;
            const sheet = document.getElementById('appointment-letter-sheet');
            const btnWithBg = document.getElementById('btn-pad-mode-with-bg');
            const btnBlank = document.getElementById('btn-pad-mode-blank');
            const hint = document.getElementById('pad-mode-hint');

            if (mode === 'with-bg') {
                if (sheet) {
                    sheet.classList.remove('pad-mode-blank');
                    sheet.classList.add('pad-mode-with-bg');
                }
                if (btnWithBg) {
                    btnWithBg.className = "p-2.5 rounded-xl border border-amber-500 bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold text-xs flex flex-col items-center gap-1 transition cursor-pointer";
                }
                if (btnBlank) {
                    btnBlank.className = "p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold text-xs flex flex-col items-center gap-1 transition cursor-pointer";
                }
                if (hint) {
                    hint.innerText = '"With Company Pad" renders the full colorful Sanvee\'s logo and watermark for printing on blank paper.';
                }
            } else {
                if (sheet) {
                    sheet.classList.remove('pad-mode-with-bg');
                    sheet.classList.add('pad-mode-blank');
                }
                if (btnBlank) {
                    btnBlank.className = "p-2.5 rounded-xl border border-amber-500 bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold text-xs flex flex-col items-center gap-1 transition cursor-pointer";
                }
                if (btnWithBg) {
                    btnWithBg.className = "p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold text-xs flex flex-col items-center gap-1 transition cursor-pointer";
                }
                if (hint) {
                    hint.innerText = '"Blank Pad" mode is for printing text onto pre-printed company stationery sheets loaded in the printer.';
                }
            }
        }

        function setAppointmentFont(font) {
            appointmentState.font = font;
            const sheet = document.getElementById('appointment-letter-sheet');
            const btnSans = document.getElementById('btn-font-sans');
            const btnSerif = document.getElementById('btn-font-serif');

            if (font === 'serif') {
                if (sheet) sheet.classList.add('font-serif');
                if (btnSerif) btnSerif.className = "px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-500/15 text-sky-500 border border-sky-500/30";
                if (btnSans) btnSans.className = "px-2.5 py-1 rounded-lg text-xs font-bold text-slate-500 hover:text-slate-300";
            } else {
                if (sheet) sheet.classList.remove('font-serif');
                if (btnSans) btnSans.className = "px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-500/15 text-sky-500 border border-sky-500/30";
                if (btnSerif) btnSerif.className = "px-2.5 py-1 rounded-lg text-xs font-bold text-slate-500 hover:text-slate-300";
            }
        }

        function changeAppointmentZoom(delta) {
            appointmentState.zoom = Math.min(1.4, Math.max(0.5, (appointmentState.zoom || 1.0) + delta));
            applyAppointmentZoom();
        }

        function resetAppointmentZoom() {
            const container = document.querySelector('.appointment-preview-column');
            if (container && container.clientWidth < 820) {
                appointmentState.zoom = Math.max(0.45, Math.min(1.0, (container.clientWidth - 40) / 794));
            } else {
                appointmentState.zoom = 1.0;
            }
            applyAppointmentZoom();
        }

        function applyAppointmentZoom() {
            const sheet = document.getElementById('appointment-letter-sheet');
            const label = document.getElementById('appointment-zoom-label');
            const z = appointmentState.zoom || 1.0;
            if (sheet) {
                sheet.style.transform = `scale(${z})`;
                const wrapper = document.querySelector('.appointment-sheet-wrapper');
                if (wrapper) {
                    const scaledHeight = 1123 * z;
                    wrapper.style.minHeight = `${scaledHeight + 40}px`;
                }
            }
            if (label) {
                label.innerText = `${Math.round(z * 100)}%`;
            }
        }

        function resetAppointmentToDefault(quiet = false) {
            appointmentState = { ...DEFAULT_APPOINTMENT_STATE };
            const todayStr = getTodayDateStr();
            appointmentState.issueDate = todayStr;
            const year = todayStr.substring(0, 4) || '2026';
            appointmentState.reference = `SBT/HR/${year}/01`;

            const nameIn = document.getElementById('appointment-input-name');
            const salutationIn = document.getElementById('appointment-input-salutation');
            const dateIn = document.getElementById('appointment-input-date');
            const effectiveDateIn = document.getElementById('appointment-input-effective-date');
            const refIn = document.getElementById('appointment-input-ref');
            const subjectIn = document.getElementById('appointment-input-subject');
            const trainingSalaryIn = document.getElementById('appointment-input-training-salary');
            const basicSalaryIn = document.getElementById('appointment-input-basic-salary');
            const noticePeriodIn = document.getElementById('appointment-input-notice-period');
            const signatoryIn = document.getElementById('appointment-input-signatory');
            const locationIn = document.getElementById('appointment-input-location');
            const modSelect = document.getElementById('appointment-mod-select');

            if (nameIn) nameIn.value = appointmentState.candidateName;
            if (salutationIn) salutationIn.value = appointmentState.salutation;
            if (dateIn) dateIn.value = appointmentState.issueDate;
            if (effectiveDateIn) effectiveDateIn.value = appointmentState.effectiveDate;
            if (refIn) refIn.value = appointmentState.reference;
            if (subjectIn) subjectIn.value = appointmentState.subject;
            if (trainingSalaryIn) trainingSalaryIn.value = appointmentState.trainingSalary;
            if (basicSalaryIn) basicSalaryIn.value = appointmentState.basicSalary;
            if (noticePeriodIn) noticePeriodIn.value = appointmentState.noticePeriod;
            if (signatoryIn) signatoryIn.value = appointmentState.signatory;
            if (locationIn) locationIn.value = appointmentState.location;
            if (modSelect) modSelect.value = "";

            const pillSl = document.getElementById('app-info-sl');
            const pillName = document.getElementById('app-info-name');
            const pillPhone = document.getElementById('app-info-phone');
            const pillJoin = document.getElementById('app-info-join');
            if (pillSl) pillSl.innerText = '--';
            if (pillName) pillName.innerText = 'Custom Entry';
            if (pillPhone) pillPhone.innerText = 'Phone: --';
            if (pillJoin) pillJoin.innerText = '--';

            setAppointmentPadMode('with-bg');
            setAppointmentFont('sans');
            updateAppointmentPreview();
            if (!quiet) {
                showToast('Appointment template reset to default', 'info');
            }
        }

        function copyAppointmentText() {
            const text = `Appointment Letter
Date: ${formatToDisplayDate(appointmentState.issueDate)}
Reference: ${appointmentState.reference}

To:
${appointmentState.candidateName}

Subject: ${appointmentState.subject}

Dear ${appointmentState.salutation},

We are pleased to inform you that you have been appointed as a Moderator at Sanvee's by Tony, effective from ${formatToFormalDate(appointmentState.effectiveDate)}. Your responsibilities will include overseeing and managing moderation activities related to the company's online pages and customer service. Also, we would like to inform you that there will be some times where we can give other responsibilities besides your duty as a moderator. If you want to resign from your duty then you have to inform us at least ${appointmentState.noticePeriod} earlier.

Your working hours, duties, and remuneration will be as per the company's rules and policies. As for your salary, you will get ${appointmentState.trainingSalary} for the first month since it will be your training period. After your first month on duty, you will get your basic salary ${appointmentState.basicSalary} per month. We trust that you will perform your responsibilities diligently in the best interest of the organization.

Thank you,

Signature: _________________
${appointmentState.signatory}
Sanvee's By Tony
${appointmentState.location}`;

            navigator.clipboard.writeText(text).then(() => {
                showToast('Appointment letter copied to clipboard!', 'success');
            }).catch(() => {
                showToast('Failed to copy text', 'error');
            });
        }

        function printAppointmentLetter() {
            if (currentUserRole === 'moderator') {
                showToast('Printing is restricted to In-Charge Admin.', 'info');
                return;
            }

            document.body.classList.add('print-appointment-active');
            if (appointmentState.padMode === 'blank') {
                document.body.classList.add('pad-mode-blank');
                document.body.classList.remove('pad-mode-with-bg');
            } else {
                document.body.classList.add('pad-mode-with-bg');
                document.body.classList.remove('pad-mode-blank');
            }

            applyPrintOrientationSettings();

            window.print();

            setTimeout(() => {
                document.body.classList.remove('print-appointment-active');
                document.body.classList.remove('pad-mode-with-bg');
                document.body.classList.remove('pad-mode-blank');
                applyPrintOrientationSettings();
            }, 1000);
        }

        function generateAppointmentForModerator(modSl) {
            switchView('appointment');
            const selectEl = document.getElementById('appointment-mod-select');
            if (selectEl) {
                selectEl.value = String(modSl);
                handleAppointmentModSelect(modSl);
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function updateDateUI() {
            document.getElementById('selected-date-picker').value = currentActiveDate;
            const dayName = getDayNameForDate(currentActiveDate);
            document.getElementById('daily-banner-day').innerText = dayName;

            const isToday = currentActiveDate === getTodayDateStr();
            const todayBadge = document.getElementById('daily-banner-is-today');
            if (todayBadge) {
                if (isToday) todayBadge.classList.remove('hidden');
                else todayBadge.classList.add('hidden');
            }

            const navLabel = document.getElementById('nav-active-date-label');
            if (navLabel) navLabel.innerText = isToday ? 'Today' : `${currentActiveDate} (${dayName.substring(0, 3)})`;
        }

        function syncActiveMonthFromDate() {
            const newMonth = currentActiveDate.substring(0, 7);
            if (newMonth !== currentActiveMonth) {
                currentActiveMonth = newMonth;
                const mPicker = document.getElementById('selected-month-picker');
                if (mPicker) mPicker.value = currentActiveMonth;
                if (activeView === 'monthly') renderMonthlyTable();
            }
        }

        function handleDatePickerChange(val) {
            if (!val) return;
            currentActiveDate = val;
            syncActiveMonthFromDate();
            initAttendanceForDate(currentActiveDate);
            updateDateUI();
            renderDailyTable();
            showToast(`Loaded roster for ${currentActiveDate}`);
        }

        function navigateDay(offset) {
            const [y, m, d] = currentActiveDate.split('-').map(Number);
            const dateObj = new Date(y, m - 1, d, 12, 0, 0);
            dateObj.setDate(dateObj.getDate() + offset);

            const newY = dateObj.getFullYear();
            const newM = String(dateObj.getMonth() + 1).padStart(2, '0');
            const newD = String(dateObj.getDate()).padStart(2, '0');
            currentActiveDate = `${newY}-${newM}-${newD}`;

            syncActiveMonthFromDate();
            initAttendanceForDate(currentActiveDate);
            updateDateUI();
            renderDailyTable();
        }

        function jumpToToday() {
            currentActiveDate = getTodayDateStr();
            syncActiveMonthFromDate();
            initAttendanceForDate(currentActiveDate);
            updateDateUI();
            renderDailyTable();
            showToast('Jumped to Today');
        }

        function handleMonthPickerChange(val) {
            if (!val) return;
            currentActiveMonth = val;
            renderMonthlyTable();
        }

        function jumpToCurrentMonth() {
            currentActiveMonth = getCurrentMonthStr();
            document.getElementById('selected-month-picker').value = currentActiveMonth;
            renderMonthlyTable();
        }

        // ======================= SEARCH & FILTER HANDLERS =======================
        function handleSearch(val) {
            searchQuery = val || "";
            const clearBtn = document.getElementById('search-clear-btn');
            if (clearBtn) {
                if (searchQuery) clearBtn.classList.remove('hidden');
                else clearBtn.classList.add('hidden');
            }
            renderDailyTable();
        }

        function clearSearch() {
            searchQuery = "";
            const input = document.getElementById('search-input');
            if (input) input.value = "";
            const clearBtn = document.getElementById('search-clear-btn');
            if (clearBtn) clearBtn.classList.add('hidden');
            renderDailyTable();
        }

        function handleFilterChange() {
            const weekendSelect = document.getElementById('filter-weekend-select');
            if (weekendSelect) filterWeekend = weekendSelect.value;
            renderDailyTable();
        }

        function filterByChip(status) {
            filterStatus = status;
            
            const chipMap = {
                'ALL': 'chip-filter-all',
                'AVAILABLE_TODAY': 'chip-filter-available',
                'Present': 'chip-filter-present',
                'Extra Duty': 'chip-filter-extra',
                'Weekly Off': 'chip-filter-off',
                'Weekend Exchange': 'chip-filter-exchange',
                'Absent': 'chip-filter-absent',
                'Night Shift': 'chip-filter-night',
                'Leave': 'chip-filter-leave'
            };

            document.querySelectorAll('.filter-chip').forEach(c => {
                c.classList.remove('active');
            });

            const activeId = chipMap[status];
            const activeEl = document.getElementById(activeId);
            if (activeEl) {
                activeEl.classList.add('active');
            }

            renderDailyTable();
        }

        function resetAllFilters() {
            searchQuery = "";
            filterStatus = "ALL";
            filterWeekend = "ALL";
            const searchInput = document.getElementById('search-input');
            if (searchInput) searchInput.value = "";
            const weekendSelect = document.getElementById('filter-weekend-select');
            if (weekendSelect) weekendSelect.value = "ALL";
            const clearBtn = document.getElementById('search-clear-btn');
            if (clearBtn) clearBtn.classList.add('hidden');

            document.querySelectorAll('.filter-chip').forEach(c => {
                c.classList.remove('active');
            });
            const chipAll = document.getElementById('chip-filter-all');
            if (chipAll) chipAll.classList.add('active');

            renderDailyTable();
            showToast('All filters reset');
        }

        function bulkMarkAllPresent() {
            if (currentUserRole === 'moderator') {
                showToast('Bulk marking attendance is restricted to In-Charge Admin.', 'info');
                return;
            }
            const dayName = getDayNameForDate(currentActiveDate);
            initAttendanceForDate(currentActiveDate);
            let count = 0;

            moderators.forEach((mod) => {
                const isTodayWeekend = mod.weekend && dayName && mod.weekend.toLowerCase() === dayName.toLowerCase();
                const currentStatus = getModeratorStatusForDate(mod, currentActiveDate);
                if (!isTodayWeekend && currentStatus !== 'Leave' && currentStatus !== 'Night Shift' && currentStatus !== 'Weekend Exchange' && currentStatus !== 'Extra Duty') {
                    setModeratorStatusForDate(mod, currentActiveDate, 'Present');
                    count++;
                }
            });

            saveToLocalStorage();
            renderDailyTable();
            updateDailyKPIs();
            showToast(`⚡ ${count} on-duty moderators marked as Present!`, 'success');
        }

        // ======================= DAILY ROSTER RENDERER =======================
        function renderDailyTable() {
            const tbody = document.getElementById("moderator-table-body");
            const noResults = document.getElementById("no-results-state");
            tbody.innerHTML = "";

            const dayName = getDayNameForDate(currentActiveDate);
            initAttendanceForDate(currentActiveDate);

            let filtered = moderators.filter((mod, originalIndex) => {
                mod._originalIndex = originalIndex;
                const status = getModeratorStatusForDate(mod, currentActiveDate);
                const isTodayWeekend = mod.weekend && dayName && mod.weekend.toLowerCase() === dayName.toLowerCase();

                if (filterStatus === "AVAILABLE_TODAY") {
                    if (status !== 'Present' && status !== 'Night Shift' && status !== 'Outside Work' && status !== 'Extra Duty') return false;
                } else if (filterStatus !== "ALL" && status !== filterStatus) {
                    return false;
                }
                if (filterWeekend !== "ALL" && (mod.weekend || '').toLowerCase() !== filterWeekend.toLowerCase()) return false;

                if (searchQuery.trim() !== "") {
                    const q = searchQuery.toLowerCase();
                    const matchName = (mod.name || "").toLowerCase().includes(q);
                    const matchPhone = (mod.phone || "").toLowerCase().includes(q);
                    const matchSl = String(mod.sl || "").includes(q);
                    const matchWeekend = (mod.weekend || "").toLowerCase().includes(q);
                    if (!matchName && !matchPhone && !matchSl && !matchWeekend) return false;
                }

                return true;
            });

            document.getElementById("showing-records-badge").innerText = `${filtered.length} of ${moderators.length} Members`;
            
            const footerEl = document.getElementById("footer-count-text");
            if (filtered.length !== moderators.length) {
                const filterLabel = filterStatus === 'AVAILABLE_TODAY' ? '⚡ On Duty Today' : (filterStatus !== 'ALL' ? filterStatus : 'Filtered');
                footerEl.innerHTML = `Showing: <b class="text-indigo-600 font-mono">${filtered.length}</b> of <b class="font-mono">${moderators.length}</b> Total Moderators (${filterLabel})`;
            } else {
                footerEl.innerHTML = `Total Active Moderators: <b class="font-mono">${moderators.length}</b> Members`;
            }

            if (filtered.length === 0) noResults.classList.remove("hidden");
            else noResults.classList.add("hidden");

            filtered.forEach((mod, renderIndex) => {
                const tr = document.createElement("tr");
                const currentStatus = getModeratorStatusForDate(mod, currentActiveDate);
                const isTodayWeekend = mod.weekend && dayName && (mod.weekend.toLowerCase() === dayName.toLowerCase());
                const isUnexcusedAbsent = currentStatus === 'Absent' && !isTodayWeekend;
                const isOffToday = currentStatus === 'Weekly Off' || isTodayWeekend;
                const weekendBadgeClass = WEEKEND_BADGE_STYLES[mod.weekend] || 'bg-slate-100 text-slate-800';
                const isMe = (currentUserRole === 'moderator' && mod.sl === currentLoggedInModSl);

                tr.className = `hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 transition duration-150 ${isMe ? 'row-highlight-me' : (isUnexcusedAbsent ? 'row-highlight-absent' : '')}`;

                tr.innerHTML = `
                    <td class="col-daily-sl py-3.5 px-4 text-center font-mono font-bold text-slate-500 dark:text-slate-400 text-xs sm:text-sm align-middle">
                        ${String(renderIndex + 1).padStart(2, '0')}
                    </td>

                    <td class="col-daily-name py-3.5 px-4 align-middle">
                        <div class="flex flex-col justify-center">
                            <div class="flex items-center gap-2">
                                <button type="button" onclick="viewModeratorMonthly(${mod.sl})" 
                                        class="text-left font-display font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition text-sm sm:text-base flex items-center gap-1.5 group/name cursor-pointer">
                                    <span class="group-hover/name:underline decoration-indigo-500 underline-offset-2 font-bold tracking-tight">${mod.name}</span>
                                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-400 opacity-0 group-hover/name:opacity-100 transition-opacity no-print"></i>
                                </button>
                                ${isMe ? `
                                    <span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-600 text-white shadow-xs">
                                        You
                                    </span>
                                ` : ''}
                                ${isUnexcusedAbsent ? `
                                    <span class="px-2 py-0.5 rounded-md text-[10px] font-black bg-rose-600 text-white animate-pulse no-print flex items-center gap-1 shadow-xs">
                                        <i class="fa-brands fa-whatsapp"></i> Alert Sent
                                    </span>
                                ` : ''}
                            </div>
                        </div>
                    </td>

                    <td class="col-daily-off py-3.5 px-4 text-center align-middle">
                        <span class="inline-flex items-center justify-center px-3 py-1.5 rounded-xl font-display font-bold text-xs border ${weekendBadgeClass}">
                            ${mod.weekend}
                        </span>
                    </td>

                    <td class="col-daily-phone py-3.5 px-4 text-center align-middle">
                        <div class="inline-flex items-center justify-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                            <span>${mod.phone}</span>
                            ${currentUserRole === 'admin' ? `
                                <button onclick="triggerDirectWhatsApp('${mod.phone}', '${mod.name}', ${isUnexcusedAbsent}, '${currentActiveDate}')" 
                                        title="${isUnexcusedAbsent ? 'Send Absent Alert Notice' : 'Chat on WhatsApp'}" 
                                        class="relative w-8 h-8 rounded-xl ${isUnexcusedAbsent ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-glow-rose hover:scale-110' : 'bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-500/20 hover:scale-105'} flex items-center justify-center text-xs transition active:scale-95 no-print shadow-xs cursor-pointer">
                                    ${isUnexcusedAbsent ? '<span class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>' : ''}
                                    <i class="fa-brands fa-whatsapp"></i>
                                </button>
                            ` : ''}
                        </div>
                    </td>

                    <td class="col-daily-join py-3.5 px-4 text-center align-middle">
                        <div class="flex flex-col items-center justify-center">
                            <div class="font-mono text-slate-700 dark:text-slate-300 font-semibold text-xs">
                                ${mod.join}
                            </div>
                            <div class="inline-flex items-center justify-center gap-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-md border border-indigo-500/20 mt-1 font-mono">
                                <i class="fa-solid fa-business-time text-[9px]"></i>
                                <span>${calculateTenure(mod.join, currentActiveDate)}</span>
                            </div>
                        </div>
                    </td>

                    <td class="col-daily-status py-3.5 px-4 text-center align-middle">
                        ${currentUserRole === 'moderator' ? `
                            <div class="inline-flex items-center justify-center px-3.5 py-1.5 rounded-xl font-display font-bold text-xs border
                                ${currentStatus === 'Present' ? 'status-pill-present' : ''}
                                ${currentStatus === 'Weekly Off' ? 'status-pill-off' : ''}
                                ${currentStatus === 'Extra Duty' ? 'status-pill-extra' : ''}
                                ${currentStatus === 'Weekend Exchange' ? 'status-pill-exchange' : ''}
                                ${currentStatus === 'Absent' ? 'status-pill-absent' : ''}
                                ${currentStatus === 'Night Shift' ? 'status-pill-night' : ''}
                                ${currentStatus === 'Leave' ? 'status-pill-leave' : ''}
                                ${currentStatus === 'Outside Work' ? 'bg-slate-100 text-slate-800' : ''}">
                                ${currentStatus === 'Weekly Off' ? '<i class="fa-solid fa-umbrella-beach mr-1 text-amber-500"></i>Weekly Off' : ''}
                                ${currentStatus === 'Present' ? '<i class="fa-solid fa-circle-check mr-1 text-emerald-500"></i>Present' : ''}
                                ${currentStatus === 'Extra Duty' ? '<i class="fa-solid fa-bolt-lightning mr-1 text-teal-500"></i>Extra Duty' : ''}
                                ${currentStatus === 'Weekend Exchange' ? '<i class="fa-solid fa-shuffle mr-1 text-cyan-500"></i>Weekend Exchange' : ''}
                                ${currentStatus === 'Absent' ? '<i class="fa-solid fa-circle-xmark mr-1 text-rose-500"></i>Absent' : ''}
                                ${currentStatus === 'Night Shift' ? '<i class="fa-solid fa-moon mr-1 text-indigo-500"></i>Night Shift' : ''}
                                ${currentStatus === 'Leave' ? '<i class="fa-solid fa-plane-departure mr-1 text-purple-500"></i>Leave' : ''}
                                ${currentStatus === 'Outside Work' ? '<i class="fa-solid fa-briefcase mr-1 text-slate-500"></i>Outside Duty' : ''}
                            </div>
                        ` : `
                            <div class="flex items-center justify-center">
                                <select onchange="handleStatusSelect(${mod._originalIndex}, this.value)" 
                                        class="no-print w-full max-w-[200px] px-3 py-2 text-center rounded-xl text-xs sm:text-sm font-display font-bold border outline-none cursor-pointer transition shadow-xs
                                        ${currentStatus === 'Present' ? 'status-pill-present' : ''}
                                        ${currentStatus === 'Weekly Off' ? 'status-pill-off' : ''}
                                        ${currentStatus === 'Extra Duty' ? 'status-pill-extra' : ''}
                                        ${currentStatus === 'Weekend Exchange' ? 'status-pill-exchange' : ''}
                                        ${currentStatus === 'Absent' ? 'status-pill-absent ring-2 ring-rose-500/40' : ''}
                                        ${currentStatus === 'Night Shift' ? 'status-pill-night' : ''}
                                        ${currentStatus === 'Leave' ? 'status-pill-leave' : ''}
                                        ${currentStatus === 'Outside Work' ? 'bg-slate-100 text-slate-800' : ''}">
                                    <option value="Weekly Off" ${currentStatus === 'Weekly Off' ? 'selected' : ''}>🏖️ Weekly Off</option>
                                    <option value="Present" ${currentStatus === 'Present' ? 'selected' : ''}>🟢 Present</option>
                                    <option value="Extra Duty" ${currentStatus === 'Extra Duty' ? 'selected' : ''}>⚡ Extra Duty</option>
                                    <option value="Weekend Exchange" ${currentStatus === 'Weekend Exchange' ? 'selected' : ''}>🔄 Weekend Exchange</option>
                                    <option value="Absent" ${currentStatus === 'Absent' ? 'selected' : ''}>🔴 Absent (Auto WA)</option>
                                    <option value="Night Shift" ${currentStatus === 'Night Shift' ? 'selected' : ''}>🌙 Night Shift</option>
                                    <option value="Leave" ${currentStatus === 'Leave' ? 'selected' : ''}>✈️ Approved Leave</option>
                                    <option value="Outside Work" ${currentStatus === 'Outside Work' ? 'selected' : ''}>💼 Outside Duty</option>
                                </select>
                            </div>
                        `}
                        <div class="print-only font-bold text-center">
                            <span>${currentStatus}</span>
                        </div>
                    </td>

                    <td class="col-daily-actions py-3.5 px-4 text-center align-middle no-print">
                        ${currentUserRole === 'moderator' ? `
                            <span class="text-slate-300 dark:text-slate-600 font-mono text-xs">--</span>
                        ` : `
                            <div class="flex items-center justify-center gap-1.5">
                                <button onclick="generateAppointmentForModerator(${mod.sl})" title="Appointment Letter" class="w-8 h-8 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-950/60 text-slate-400 hover:text-amber-500 flex items-center justify-center transition cursor-pointer">
                                    <i class="fa-solid fa-file-signature text-xs"></i>
                                </button>
                                <button onclick="openEditModal(${mod._originalIndex})" title="Edit" class="w-8 h-8 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/60 text-slate-400 hover:text-indigo-600 flex items-center justify-center transition cursor-pointer">
                                    <i class="fa-solid fa-pen text-xs"></i>
                                </button>
                                <button onclick="deleteModerator(${mod._originalIndex})" title="Delete" class="w-8 h-8 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/60 text-slate-400 hover:text-rose-600 flex items-center justify-center transition cursor-pointer">
                                    <i class="fa-solid fa-trash text-xs"></i>
                                </button>
                            </div>
                        `}
                    </td>
                `;

                tbody.appendChild(tr);
            });

            updateDailyKPIs();
        }

        // Animated Counter Helper (Zero-Jank Raf)
        function animateNumber(elementId, newVal) {
            const el = document.getElementById(elementId);
            if (!el) return;
            const strVal = String(newVal);
            if (el.innerText !== strVal) {
                el.innerText = strVal;
                el.classList.remove('animate-counter-bump');
                requestAnimationFrame(() => el.classList.add('animate-counter-bump'));
            }
        }

        // Daily KPI Calculations
        function updateDailyKPIs() {
            const dayName = getDayNameForDate(currentActiveDate);
            let present = 0, absent = 0, night = 0, offToday = 0, leaveCount = 0, unexcusedCount = 0, exchangeCount = 0, outsideCount = 0, extraDutyCount = 0;

            moderators.forEach(mod => {
                const status = getModeratorStatusForDate(mod, currentActiveDate);
                const isWeekend = mod.weekend && dayName && (mod.weekend.toLowerCase() === dayName.toLowerCase());

                if (status === 'Present') {
                    present++;
                } else if (status === 'Night Shift') {
                    night++;
                } else if (status === 'Weekly Off') {
                    offToday++;
                } else if (status === 'Leave') {
                    leaveCount++;
                } else if (status === 'Weekend Exchange') {
                    exchangeCount++;
                } else if (status === 'Extra Duty') {
                    extraDutyCount++;
                } else if (status === 'Outside Work') {
                    outsideCount++;
                } else if (status === 'Absent') {
                    absent++;
                    if (!isWeekend) unexcusedCount++;
                }
            });

            const totalMods = moderators.length;
            const total = totalMods || 1;

            animateNumber('count-total-mods', totalMods);

            // On Duty: all actively working on roster today (Present + Night Duty + Outside Duty + Extra Duty)
            const availableCount = present + night + outsideCount + extraDutyCount;
            const availablePct = Math.round((availableCount / total) * 100);

            animateNumber('count-available-today', availableCount);
            animateNumber('pct-available-today', `${availablePct}%`);
            const subAvail = document.getElementById('sub-available-today');
            if (subAvail) subAvail.innerText = `${availableCount} of ${totalMods} Scheduled`;
            const barAvail = document.getElementById('bar-available-today');
            if (barAvail) barAvail.style.width = `${availablePct}%`;

            animateNumber('count-present', present);
            const presentPct = Math.round((present / total) * 100);
            animateNumber('pct-present', `${presentPct}%`);
            const barPres = document.getElementById('bar-present');
            if (barPres) barPres.style.width = `${presentPct}%`;

            animateNumber('count-off-today', offToday);
            animateNumber('count-absent', absent);

            // Bento Absent Card Highlight Glow when absent > 0
            const absentCard = document.getElementById('card-bento-absent');
            if (absentCard) {
                if (absent > 0) {
                    absentCard.classList.add('ring-2', 'ring-rose-500', 'shadow-glow-rose');
                } else {
                    absentCard.classList.remove('ring-2', 'ring-rose-500', 'shadow-glow-rose');
                }
            }

            animateNumber('count-night', night);

            // Update Header Operations Counts
            const activeNightShiftsCount = scheduledNightShifts.filter(r => r.endDate >= currentActiveDate).length;
            const activeLeavesCount = approvedLeaves.filter(r => r.endDate >= currentActiveDate).length;
            const activeExchangesCount = weekendExchanges.filter(x => (x.dutyDate && x.dutyDate >= currentActiveDate) || (x.offDate && x.offDate >= currentActiveDate)).length;

            animateNumber('active-night-count', activeNightShiftsCount);
            animateNumber('active-leave-count', activeLeavesCount);
            animateNumber('active-exchange-count', activeExchangesCount);
            animateNumber('unexcused-count', unexcusedCount);

            // Update All Filter Chip label dynamically
            const chipAllLabel = document.getElementById('chip-filter-all-label');
            if (chipAllLabel) chipAllLabel.innerText = `All (${totalMods})`;
        }

        function handleStatusSelect(index, newStatus) {
            if (currentUserRole === 'moderator') {
                showToast('Editing attendance is restricted to In-Charge Admin.', 'info');
                return;
            }
            const mod = moderators[index];
            setModeratorStatusForDate(mod, currentActiveDate, newStatus);
            renderDailyTable();

            const dayName = getDayNameForDate(currentActiveDate);
            const isWeekend = mod.weekend && dayName && (mod.weekend.toLowerCase() === dayName.toLowerCase());

            if (newStatus === 'Absent') {
                if (isWeekend) {
                    showToast(`Notice: ${currentActiveDate} is ${mod.name}'s scheduled Weekly Off`, 'info');
                } else {
                    openAbsentAlertModal(mod, currentActiveDate);
                    showToast(`🔴 Absent status set. Confirm WhatsApp alert in modal.`, 'info');
                }
            } else if (newStatus === 'Night Shift') {
                openNightShiftModal(mod.sl);
            } else if (newStatus === 'Leave') {
                openLeaveModal(mod.sl);
            } else if (newStatus === 'Weekend Exchange') {
                openExchangeModal(mod.sl, currentActiveDate);
            } else if (newStatus === 'Extra Duty') {
                showToast(`⚡ Extra Duty recorded for ${mod.name}`, 'success');
            } else {
                showToast(`Status updated to ${newStatus}`);
            }
        }

        // ======================= MONTHLY ATTENDANCE SHEET RENDERER (60FPS ULTRA FAST) =======================
        const MATRIX_BADGE_MAP = {
            'Present': '<span class="matrix-cell-badge matrix-badge-present">P</span>',
            'Weekly Off': '<span class="matrix-cell-badge matrix-badge-off">OFF</span>',
            'Weekend Exchange': '<span class="matrix-cell-badge matrix-badge-exchange">EX</span>',
            'Extra Duty': '<span class="matrix-cell-badge matrix-badge-extra">ED</span>',
            'Absent': '<span class="matrix-cell-badge matrix-badge-absent">A</span>',
            'Night Shift': '<span class="matrix-cell-badge matrix-badge-night">N</span>',
            'Leave': '<span class="matrix-cell-badge matrix-badge-leave">L</span>'
        };
        const MATRIX_BADGE_OUTSIDE = '<span class="matrix-cell-badge matrix-badge-outside">O</span>';

        function renderMonthlyTable() {
            if (!currentActiveMonth || !currentActiveMonth.includes('-')) {
                currentActiveMonth = getCurrentMonthStr();
            }
            const [yearStr, monthStr] = currentActiveMonth.split('-');
            const year = parseInt(yearStr, 10) || new Date().getFullYear();
            const month = parseInt(monthStr, 10) || (new Date().getMonth() + 1);
            const monthName = MONTH_NAMES[month - 1] || 'Current Month';

            const labelEl = document.getElementById('monthly-sheet-label');
            if (labelEl) labelEl.innerText = `${monthName} ${year}`;
            const pickerEl = document.getElementById('selected-month-picker');
            if (pickerEl) pickerEl.value = currentActiveMonth;

            // Sync monthly filter dropdown efficiently
            const modSelect = document.getElementById('monthly-mod-select');
            if (modSelect) {
                if (modSelect._cachedCount !== moderators.length) {
                    let optionsHtml = `<option value="ALL">All Moderators (${moderators.length})</option>`;
                    for (let i = 0; i < moderators.length; i++) {
                        const m = moderators[i];
                        optionsHtml += `<option value="${m.sl}">${String(m.sl).padStart(2, '0')} - ${m.name} (${m.weekend} Off)</option>`;
                    }
                    modSelect.innerHTML = optionsHtml;
                    modSelect._cachedCount = moderators.length;
                }
                modSelect.value = String(selectedMonthlyModSl);
            }

            const clearBtn = document.getElementById('btn-clear-monthly-mod-filter');
            const filterBadge = document.getElementById('monthly-filter-badge');
            const singleCard = document.getElementById('single-mod-monthly-card');

            let displayMods = moderators;
            const isSingleMod = selectedMonthlyModSl !== 'ALL';

            if (isSingleMod) {
                const targetMod = moderators.find(m => String(m.sl) === String(selectedMonthlyModSl));
                displayMods = targetMod ? [targetMod] : moderators;
            }

            if (isSingleMod && displayMods.length === 1) {
                if (clearBtn) clearBtn.classList.remove('hidden');
                if (filterBadge) filterBadge.classList.remove('hidden');
                if (singleCard) singleCard.classList.remove('hidden');
            } else {
                if (clearBtn) clearBtn.classList.add('hidden');
                if (filterBadge) filterBadge.classList.add('hidden');
                if (singleCard) singleCard.classList.add('hidden');
            }

            const daysInMonth = new Date(year, month, 0).getDate();
            const monthPadded = String(month).padStart(2, '0');
            const monthPrefix = `${year}-${monthPadded}-`;

            // 1. Pre-initialize and cache all 31 days for this month in a single sub-millisecond pass
            const monthDayRecords = [];
            for (let d = 1; d <= daysInMonth; d++) {
                const dateStr = `${monthPrefix}${String(d).padStart(2, '0')}`;
                initAttendanceForDate(dateStr);
                monthDayRecords[d] = {
                    dateStr,
                    dayRecords: attendanceHistory[dateStr],
                    dayName: getDayNameForDate(dateStr),
                    dayNameShort: getDayNameForDate(dateStr).substring(0, 2),
                    isToday: (dateStr === currentActiveDate)
                };
            }

            // 2. Generate Table Header (only if active month or selection changed)
            const thead = document.getElementById('monthly-table-head');
            const theadCacheKey = `${currentActiveMonth}-${daysInMonth}-${currentActiveDate}`;
            if (thead && thead._renderedKey !== theadCacheKey) {
                let headerHtml = `
                    <tr class="bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 font-display font-black uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">
                        <th class="col-m-sl py-2.5 px-1 text-center align-middle bg-slate-100 dark:bg-slate-800">SL</th>
                        <th class="col-m-name py-2.5 px-2 text-left align-middle bg-slate-100 dark:bg-slate-800">Name</th>
                        <th class="col-m-off py-2.5 px-1 text-center align-middle bg-slate-100 dark:bg-slate-800">Off</th>
                `;

                for (let d = 1; d <= daysInMonth; d++) {
                    const dayInfo = monthDayRecords[d];
                    headerHtml += `
                        <th class="col-m-day py-1.5 px-0.5 text-center align-middle font-mono border-l border-slate-200 dark:border-slate-700 ${dayInfo.isToday ? 'matrix-today-header' : ''}" data-day="${d}">
                            <div class="text-xs font-black text-slate-900 dark:text-white leading-none">${d}</div>
                            <div class="text-[9px] font-bold text-slate-400 dark:text-slate-300 mt-0.5 leading-none">${dayInfo.dayNameShort}</div>
                            ${dayInfo.isToday ? '<div class="text-[7.5px] font-black uppercase tracking-tighter text-indigo-600 dark:text-indigo-300 mt-0.5 flex items-center justify-center gap-0.5"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping inline-block"></span>Today</div>' : ''}
                        </th>
                    `;
                }

                headerHtml += `
                        <th class="col-m-stat py-2.5 px-1 text-center align-middle bg-emerald-500/10 text-emerald-600 font-mono font-bold" title="Present">P</th>
                        <th class="col-m-stat py-2.5 px-1 text-center align-middle bg-amber-500/10 text-amber-600 font-mono font-bold" title="Weekly Off">Off</th>
                        <th class="col-m-stat py-2.5 px-1 text-center align-middle bg-cyan-500/10 text-cyan-600 font-mono font-bold" title="Weekend Exchange">EX</th>
                        <th class="col-m-stat py-2.5 px-1 text-center align-middle bg-teal-500/10 text-teal-600 font-mono font-bold" title="Extra Duty">ED</th>
                        <th class="col-m-stat py-2.5 px-1 text-center align-middle bg-rose-500/10 text-rose-600 font-mono font-bold" title="Absent">A</th>
                        <th class="col-m-stat py-2.5 px-1 text-center align-middle bg-indigo-500/10 text-indigo-600 font-mono font-bold" title="Night Shift">N</th>
                        <th class="col-m-stat py-2.5 px-1 text-center align-middle bg-purple-500/10 text-purple-600 font-mono font-bold" title="Leave">L</th>
                    </tr>
                `;
                thead.innerHTML = headerHtml;
                thead._renderedKey = theadCacheKey;
            }

            // 3. Fast Body Construction
            const tbody = document.getElementById('monthly-table-body');
            if (!tbody) return;
            let tbodyHtml = '';
            const isModeratorRole = (currentUserRole === 'moderator');

            for (let mIdx = 0; mIdx < displayMods.length; mIdx++) {
                const mod = displayMods[mIdx];
                let modPresent = 0, modOff = 0, modExchange = 0, modExtraDuty = 0, modAbsent = 0, modNight = 0, modLeave = 0;
                const modKey = getModeratorKey(mod);
                const slKey = String(mod.sl);
                const modWeekendLower = (mod.weekend || '').toLowerCase();

                let rowHtml = `
                    <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/30 transition-colors duration-150">
                        <td class="col-m-sl py-1.5 px-1 text-center align-middle font-mono font-bold text-slate-500">
                            ${String(mod.sl).padStart(2, '0')}
                        </td>
                        <td class="col-m-name py-1.5 px-2 align-middle font-display font-bold text-slate-900 dark:text-white whitespace-nowrap">
                            <button type="button" onclick="focusModeratorMonthly(${mod.sl})" 
                                    class="no-print text-left font-bold hover:text-indigo-600 dark:hover:text-indigo-400 transition flex items-center justify-between group/mname cursor-pointer w-full" title="Filter to ${mod.name}">
                                <span class="group-hover/mname:underline decoration-indigo-500 truncate max-w-[125px] sm:max-w-[145px] inline-block font-semibold">${mod.name}</span>
                                <i class="fa-solid fa-filter text-[9px] text-slate-400 opacity-0 group-hover/mname:opacity-80 transition-opacity"></i>
                            </button>
                            <span class="print-only font-bold text-slate-900" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">
                                ${mod.name}
                            </span>
                        </td>
                        <td class="col-m-off py-1.5 px-1 text-center align-middle font-bold text-amber-600 text-xs">
                            ${mod.weekend ? mod.weekend.substring(0, 3) : '--'}
                        </td>
                `;

                for (let d = 1; d <= daysInMonth; d++) {
                    const dayInfo = monthDayRecords[d];
                    const dayRecords = dayInfo.dayRecords;

                    let status = null;
                    if (dayRecords) {
                        if (dayRecords[modKey] !== undefined && dayRecords[modKey] !== null) {
                            status = dayRecords[modKey];
                        } else if (mod.phone && dayRecords[mod.phone] !== undefined) {
                            status = dayRecords[mod.phone];
                        } else if (dayRecords[slKey] !== undefined && dayRecords[slKey] !== null) {
                            status = dayRecords[slKey];
                        }
                    }

                    if (!status) {
                        const isWeekend = modWeekendLower && (modWeekendLower === dayInfo.dayName.toLowerCase());
                        status = isWeekend ? 'Weekly Off' : 'Present';
                    }

                    if (status === 'Present') modPresent++;
                    else if (status === 'Weekly Off') modOff++;
                    else if (status === 'Weekend Exchange') modExchange++;
                    else if (status === 'Extra Duty') modExtraDuty++;
                    else if (status === 'Absent') modAbsent++;
                    else if (status === 'Night Shift') modNight++;
                    else if (status === 'Leave') modLeave++;

                    const badge = MATRIX_BADGE_MAP[status] || MATRIX_BADGE_OUTSIDE;
                    const todayClass = dayInfo.isToday ? ' matrix-today-col' : '';

                    if (isModeratorRole) {
                        rowHtml += `
                            <td class="col-m-day py-1 px-0.5 text-center align-middle border-l border-slate-100 dark:border-slate-800${todayClass}" data-day="${d}">
                                <div class="w-full h-full flex items-center justify-center select-none" title="${mod.name}: ${status} on ${dayInfo.dateStr}">
                                    ${badge}
                                </div>
                            </td>
                        `;
                    } else {
                        rowHtml += `
                            <td class="col-m-day py-1 px-0.5 text-center align-middle border-l border-slate-100 dark:border-slate-800${todayClass}" data-day="${d}">
                                <button type="button" onclick="openStatusPicker(event, ${mod.sl}, '${dayInfo.dateStr}', '${status}')" 
                                        class="w-full h-full flex items-center justify-center rounded-lg hover:ring-2 hover:ring-indigo-500 cursor-pointer">
                                    ${badge}
                                </button>
                            </td>
                        `;
                    }
                }

                rowHtml += `
                        <td class="col-m-stat py-1.5 px-1 text-center align-middle font-mono font-bold text-emerald-600 bg-emerald-500/5">${modPresent}</td>
                        <td class="col-m-stat py-1.5 px-1 text-center align-middle font-mono font-bold text-amber-600 bg-amber-500/5">${modOff}</td>
                        <td class="col-m-stat py-1.5 px-1 text-center align-middle font-mono font-bold text-cyan-600 bg-cyan-500/5">${modExchange}</td>
                        <td class="col-m-stat py-1.5 px-1 text-center align-middle font-mono font-bold text-teal-600 bg-teal-500/5">${modExtraDuty}</td>
                        <td class="col-m-stat py-1.5 px-1 text-center align-middle font-mono font-bold text-rose-600 bg-rose-500/5">${modAbsent}</td>
                        <td class="col-m-stat py-1.5 px-1 text-center align-middle font-mono font-bold text-indigo-600 bg-indigo-500/5">${modNight}</td>
                        <td class="col-m-stat py-1.5 px-1 text-center align-middle font-mono font-bold text-purple-600 bg-purple-500/5">${modLeave}</td>
                    </tr>
                `;

                tbodyHtml += rowHtml;

                if (isSingleMod && displayMods.length === 1) {
                    const originalIdx = moderators.findIndex(m => m.sl === mod.sl);
                    const nameEl = document.getElementById('single-mod-name');
                    if (nameEl) nameEl.innerText = mod.name;
                    const slEl = document.getElementById('single-mod-sl');
                    if (slEl) slEl.innerText = `SL: ${String(mod.sl).padStart(2, '0')}`;
                    const wkEl = document.getElementById('single-mod-weekend');
                    if (wkEl) wkEl.innerText = `${mod.weekend} Off`;
                    const phEl = document.getElementById('single-mod-phone');
                    if (phEl) phEl.innerText = mod.phone;
                    const joinEl = document.getElementById('single-mod-join');
                    if (joinEl) joinEl.innerText = mod.join;
                    const tenureEl = document.getElementById('single-mod-tenure');
                    if (tenureEl) tenureEl.innerText = calculateTenure(mod.join, currentActiveDate);
                    
                    const waBtn = document.getElementById('single-mod-wa-btn');
                    const editBtn = document.getElementById('single-mod-edit-btn');
                    if (currentUserRole === 'moderator') {
                        if (waBtn) waBtn.classList.add('hidden');
                        if (editBtn) editBtn.classList.add('hidden');
                    } else {
                        if (waBtn) {
                            waBtn.classList.remove('hidden');
                            waBtn.onclick = () => triggerDirectWhatsApp(mod.phone, mod.name);
                        }
                        if (editBtn) {
                            editBtn.classList.remove('hidden');
                            editBtn.onclick = () => openEditModal(originalIdx);
                        }
                    }

                    document.getElementById('single-mod-stat-days').innerText = daysInMonth;
                    document.getElementById('single-mod-stat-present').innerText = `${modPresent} / ${daysInMonth}`;
                    document.getElementById('single-mod-stat-off').innerText = modOff;
                    const extraStatEl = document.getElementById('single-mod-stat-extra');
                    if (extraStatEl) extraStatEl.innerText = modExtraDuty;
                    document.getElementById('single-mod-stat-exchange').innerText = modExchange;
                    document.getElementById('single-mod-stat-absent').innerText = modAbsent;
                    document.getElementById('single-mod-stat-night').innerText = modNight;
                    document.getElementById('single-mod-stat-leave').innerText = modLeave;
                }
            }

            tbody.innerHTML = tbodyHtml;

            const footerCountEl = document.getElementById('monthly-footer-count');
            if (footerCountEl) {
                footerCountEl.innerText = isSingleMod ? `Showing 1 of ${moderators.length} Members` : `Showing ${moderators.length} of ${moderators.length} Members`;
            }
            setupMatrixCrosshairs();
        }

        // ======================= MATRIX HIGHLIGHT & CROSSHAIR SYSTEM (THROTTLED) =======================
        function setupMatrixCrosshairs() {
            const table = document.getElementById('monthly-matrix-table');
            if (!table || table._hasCrosshairListeners) return;
            table._hasCrosshairListeners = true;

            let currentHighlightedDay = null;
            let rafId = null;

            table.addEventListener('mouseover', (e) => {
                const cell = e.target.closest('.col-m-day');
                if (!cell) return;
                const day = cell.getAttribute('data-day');
                if (!day || day === currentHighlightedDay) return;

                if (rafId) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => {
                    if (currentHighlightedDay) {
                        const prevCells = table.querySelectorAll(`[data-day="${currentHighlightedDay}"]`);
                        for (let i = 0; i < prevCells.length; i++) {
                            prevCells[i].classList.remove('matrix-col-highlight', 'matrix-header-highlight');
                        }
                    }

                    currentHighlightedDay = day;
                    const allDayCells = table.querySelectorAll(`[data-day="${day}"]`);
                    for (let i = 0; i < allDayCells.length; i++) {
                        const el = allDayCells[i];
                        if (el.tagName === 'TH') {
                            el.classList.add('matrix-header-highlight');
                        } else if (!el.classList.contains('matrix-today-col')) {
                            el.classList.add('matrix-col-highlight');
                        }
                    }
                });
            }, { passive: true });

            table.addEventListener('mouseleave', () => {
                if (rafId) cancelAnimationFrame(rafId);
                if (currentHighlightedDay) {
                    const prevCells = table.querySelectorAll(`[data-day="${currentHighlightedDay}"]`);
                    for (let i = 0; i < prevCells.length; i++) {
                        prevCells[i].classList.remove('matrix-col-highlight', 'matrix-header-highlight');
                    }
                    currentHighlightedDay = null;
                }
            }, { passive: true });
        }

        function scrollToTodayColumn() {
            const todayHeader = document.querySelector('.matrix-today-header');
            if (todayHeader) {
                todayHeader.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                todayHeader.classList.add('ring-4', 'ring-indigo-500', 'ring-offset-2', 'dark:ring-offset-slate-900');
                setTimeout(() => {
                    todayHeader.classList.remove('ring-4', 'ring-indigo-500', 'ring-offset-2', 'dark:ring-offset-slate-900');
                }, 1800);
                showToast("🎯 Focused on Today's Column", "info");
            } else {
                showToast("Notice: Today's date is not within the currently viewed month.", "info");
            }
        }

        // ======================= SINGLE MODERATOR FILTER & POPOVER =======================
        function viewModeratorMonthly(modSl) {
            selectedMonthlyModSl = String(modSl);
            switchView('monthly');
            const mod = moderators.find(m => m.sl === modSl);
            if (mod) showToast(`Viewing ${mod.name}'s Monthly Sheet`);
        }

        function focusModeratorMonthly(modSl) {
            if (selectedMonthlyModSl === String(modSl)) {
                selectedMonthlyModSl = 'ALL';
            } else {
                selectedMonthlyModSl = String(modSl);
            }
            renderMonthlyTable();
        }

        function clearMonthlyModFilter() {
            selectedMonthlyModSl = 'ALL';
            renderMonthlyTable();
            showToast('Showing all moderators');
        }

        function handleMonthlyModSelect(val) {
            selectedMonthlyModSl = val;
            renderMonthlyTable();
        }

        function openStatusPicker(event, modSl, dateStr, currentStatus) {
            event.stopPropagation();
            if (currentUserRole === 'moderator') {
                showToast('Editing attendance is restricted to In-Charge Admin.', 'info');
                return;
            }
            const mod = moderators.find(m => m.sl === modSl);
            if (!mod) return;

            activePickerTarget = { modSl, dateStr };

            document.getElementById('popover-mod-name').innerText = mod.name;
            const dayName = getDayNameForDate(dateStr);
            document.getElementById('popover-date-info').innerText = `${dateStr} (${dayName}) • Current: ${currentStatus}`;

            const popover = document.getElementById('status-picker-popover');
            const backdrop = document.getElementById('status-picker-backdrop');

            const rect = event.currentTarget.getBoundingClientRect();
            let top = rect.bottom + 6;
            let left = rect.left - 100;

            if (left + 288 > window.innerWidth - 12) left = window.innerWidth - 300;
            if (left < 12) left = 12;
            if (top + 290 > window.innerHeight - 12) top = Math.max(12, rect.top - 296);

            popover.style.top = `${top}px`;
            popover.style.left = `${left}px`;

            backdrop.classList.remove('hidden');
            popover.classList.remove('hidden');
        }

        function closeStatusPicker() {
            document.getElementById('status-picker-popover')?.classList.add('hidden');
            document.getElementById('status-picker-backdrop')?.classList.add('hidden');
            activePickerTarget = null;
        }

        function applyStatusChangeFromPicker(newStatus) {
            if (currentUserRole === 'moderator') {
                showToast('Editing attendance is restricted to In-Charge Admin.', 'info');
                return;
            }
            if (!activePickerTarget) return;
            const { modSl, dateStr } = activePickerTarget;
            const mod = moderators.find(m => m.sl === modSl);
            if (!mod) return;

            setModeratorStatusForDate(mod, dateStr, newStatus);
            closeStatusPicker();

            renderMonthlyTable();
            if (currentActiveDate === dateStr) renderDailyTable();

            const dayName = getDayNameForDate(dateStr);
            const isWeekend = mod.weekend && dayName && (mod.weekend.toLowerCase() === dayName.toLowerCase());
            if (newStatus === 'Absent' && !isWeekend) {
                openAbsentAlertModal(mod, dateStr);
                showToast(`🔴 Absent status set. Confirm WhatsApp alert in modal.`, 'info');
            } else {
                showToast(`Updated ${mod.name} to ${newStatus}`);
            }
        }

        // ======================= NIGHT SHIFTS MODULE (AUTO ASSIGN & WHATSAPP) =======================
        const NIGHT_EXEMPT_NAMES = ['sajedul', 'kowshiq', 'najmul', 'sujon', 'sami'];
        
        function isModeratorNightExempt(mod) {
            if (!mod) return false;
            if (mod.isNightExempt !== undefined) return mod.isNightExempt;
            const nameLower = (mod.name || '').toLowerCase();
            return NIGHT_EXEMPT_NAMES.some(kw => nameLower.includes(kw));
        }

        let activeNightShiftTab = 'active';
        let monthlyNightShiftMonth = '';
        let nightShiftRequests = JSON.parse(localStorage.getItem('sanvees_night_shift_requests') || '[]');

        function saveNightShiftRequests() {
            localStorage.setItem('sanvees_night_shift_requests', JSON.stringify(nightShiftRequests));
        }

        function switchNightShiftTab(tab) {
            activeNightShiftTab = tab;
            const btnActive = document.getElementById('tab-btn-night-active');
            const btnMonthly = document.getElementById('tab-btn-night-monthly');
            const btnRequests = document.getElementById('tab-btn-night-requests');
            const tabActive = document.getElementById('night-tab-active');
            const tabMonthly = document.getElementById('night-tab-monthly');
            const tabRequests = document.getElementById('night-tab-requests');

            const inactiveClass = "flex-1 py-2 px-2.5 rounded-xl transition flex items-center justify-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-[11px] sm:text-xs";
            const activeClass = "flex-1 py-2 px-2.5 rounded-xl transition flex items-center justify-center gap-1.5 bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm text-[11px] sm:text-xs font-bold";

            if (btnActive) btnActive.className = inactiveClass;
            if (btnMonthly) btnMonthly.className = inactiveClass;
            if (btnRequests) btnRequests.className = inactiveClass;

            if (tabActive) tabActive.classList.add('hidden');
            if (tabMonthly) tabMonthly.classList.add('hidden');
            if (tabRequests) tabRequests.classList.add('hidden');

            if (tab === 'active') {
                if (btnActive) btnActive.className = activeClass;
                if (tabActive) tabActive.classList.remove('hidden');
                renderNightShiftList();
            } else if (tab === 'monthly') {
                if (btnMonthly) btnMonthly.className = activeClass;
                if (tabMonthly) tabMonthly.classList.remove('hidden');
                const picker = document.getElementById('monthly-night-month-picker');
                if (picker && !picker.value) picker.value = monthlyNightShiftMonth || currentActiveMonth || getCurrentMonthStr();
                renderMonthlyNightShiftLog();
            } else if (tab === 'requests') {
                if (btnRequests) btnRequests.className = activeClass;
                if (tabRequests) tabRequests.classList.remove('hidden');
                renderNightShiftRequestsList();
            }
        }

        function openNightShiftModal(preselectSl = null) {
            const selectEl = document.getElementById('night-mod-select');
            if (selectEl) {
                selectEl.innerHTML = '';

                // Group: eligible first, followed by exempt seniors
                const sorted = [...moderators].sort((a, b) => {
                    const aEx = isModeratorNightExempt(a);
                    const bEx = isModeratorNightExempt(b);
                    if (aEx !== bEx) return aEx ? 1 : -1;
                    return a.sl - b.sl;
                });

                sorted.forEach(m => {
                    const isEx = isModeratorNightExempt(m);
                    const opt = document.createElement('option');
                    opt.value = m.sl;
                    opt.innerText = `${String(m.sl).padStart(2, '0')} - ${m.name} (${m.weekend} Off)${isEx ? ' [Senior - Night Exempt]' : ''}`;
                    if (isEx) {
                        opt.style.color = '#94a3b8';
                    }
                    if (preselectSl && m.sl === preselectSl) opt.selected = true;
                    selectEl.appendChild(opt);
                });

                if (!preselectSl) {
                    const firstEligible = sorted.find(m => !isModeratorNightExempt(m));
                    if (firstEligible) selectEl.value = firstEligible.sl;
                }
            }

            const startInput = document.getElementById('night-start-date');
            if (startInput) startInput.value = currentActiveDate;
            autoCalculateNightEndDate();
            applyRolePermissions();
            switchNightShiftTab('active');
            document.getElementById('night-shift-modal').classList.remove('hidden');
        }

        function closeNightShiftModal() {
            document.getElementById('night-shift-modal').classList.add('hidden');
        }

        function autoCalculateNightEndDate() {
            const selectEl = document.getElementById('night-mod-select');
            if (!selectEl) return;
            const sl = parseInt(selectEl.value, 10);
            const mod = moderators.find(m => m.sl === sl);
            const startInput = document.getElementById('night-start-date');
            const endInput = document.getElementById('night-end-date');

            if (!mod || !startInput || !endInput) return;
            const startDate = startInput.value || currentActiveDate;
            const nextWeekendDate = getNextWeekendForModerator(mod, startDate);
            
            // Duty runs until the day BEFORE weekly off
            const [ny, nm, nd] = nextWeekendDate.split('-').map(Number);
            const dayBeforeOff = new Date(ny, nm - 1, nd - 1);
            const endFormatted = `${dayBeforeOff.getFullYear()}-${String(dayBeforeOff.getMonth() + 1).padStart(2, '0')}-${String(dayBeforeOff.getDate()).padStart(2, '0')}`;
            endInput.value = endFormatted;

            updateNightDutyDatesCount();
        }

        function updateNightDutyDatesCount() {
            const selectEl = document.getElementById('night-mod-select');
            const startInput = document.getElementById('night-start-date');
            const endInput = document.getElementById('night-end-date');
            const descEl = document.getElementById('night-calc-desc');
            if (!selectEl || !startInput || !endInput || !descEl) return;

            const sl = parseInt(selectEl.value, 10);
            const mod = moderators.find(m => m.sl === sl);
            const startDate = startInput.value;
            const endDate = endInput.value;

            if (startDate && endDate) {
                if (startDate > endDate) {
                    descEl.innerHTML = '<span class="text-rose-500 font-bold">⚠️ Start Date cannot be after End Date</span>';
                    return;
                }
                const dates = getDatesInRange(startDate, endDate);
                let nightDays = 0;
                let offDays = 0;
                dates.forEach(d => {
                    const dayName = getDayNameForDate(d);
                    if (mod && mod.weekend.toLowerCase() === dayName.toLowerCase()) offDays++;
                    else nightDays++;
                });
                descEl.innerText = `${nightDays} Night Duties scheduled (${dates.length} total days${offDays > 0 ? `, ${offDays} Off-day excluded` : ''})`;
            }
        }

        function getNextWeekendForModerator(mod, fromDateStr) {
            if (!mod || !mod.weekend || !fromDateStr) return fromDateStr;
            const [y, m, d] = fromDateStr.split('-').map(Number);
            const baseDate = new Date(y, m - 1, d);
            const targetDay = mod.weekend.toLowerCase();
            const daysMap = { sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6 };
            const targetDayNum = daysMap[targetDay];

            let curr = new Date(baseDate);
            for (let i = 1; i <= 7; i++) {
                curr.setDate(curr.getDate() + 1);
                if (curr.getDay() === targetDayNum) {
                    const cy = curr.getFullYear();
                    const cm = String(curr.getMonth() + 1).padStart(2, '0');
                    const cd = String(curr.getDate()).padStart(2, '0');
                    return `${cy}-${cm}-${cd}`;
                }
            }
            return fromDateStr;
        }

        function handleNightShiftSubmit(e) {
            e.preventDefault();
            if (currentUserRole === 'moderator') {
                showToast('Assigning night shifts is restricted to In-Charge Admin.', 'info');
                return;
            }
            const sl = parseInt(document.getElementById('night-mod-select').value, 10);
            const mod = moderators.find(m => m.sl === sl);
            if (!mod) return;

            const startDate = document.getElementById('night-start-date').value;
            const endDate = document.getElementById('night-end-date').value;

            if (startDate > endDate) {
                alert('Start Date cannot be after End Date!');
                return;
            }

            const dates = getDatesInRange(startDate, endDate);
            let nightDutyDates = [];

            dates.forEach(d => {
                const dayName = getDayNameForDate(d);
                if (dayName.toLowerCase() === mod.weekend.toLowerCase()) {
                    setModeratorStatusForDate(mod, d, 'Weekly Off');
                } else {
                    setModeratorStatusForDate(mod, d, 'Night Shift');
                    nightDutyDates.push(d);
                }
            });

            scheduledNightShifts.unshift({
                id: Date.now(),
                modSl: mod.sl,
                modName: mod.name,
                modPhone: mod.phone,
                startDate,
                endDate,
                count: nightDutyDates.length,
                nightCount: nightDutyDates.length,
                nightDutyDates
            });

            saveToLocalStorage();
            renderNightShiftList();
            renderMonthlyNightShiftLog();
            renderDailyTable();
            if (activeView === 'monthly') renderMonthlyTable();

            showToast(`🌙 Night Shift assigned for ${mod.name} (${nightDutyDates.length} nights)`, 'success');
            closeNightShiftModal();
        }

        function renderNightShiftList() {
            const listEl = document.getElementById('night-shift-records-list');
            if (!listEl) return;
            listEl.innerHTML = '';

            const activeShifts = scheduledNightShifts.filter(rec => rec.endDate >= currentActiveDate);
            const activeCountEl = document.getElementById('tab-night-active-count');
            if (activeCountEl) activeCountEl.innerText = activeShifts.length;

            if (activeShifts.length === 0) {
                listEl.innerHTML = `<div class="p-4 text-center text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-2xl">No active night shifts scheduled for today. Assign manually using the form above.</div>`;
                return;
            }

            activeShifts.forEach(rec => {
                const isMe = (currentUserRole === 'moderator' && rec.modSl === currentLoggedInModSl);
                const div = document.createElement('div');
                div.className = `flex items-center justify-between p-3 rounded-2xl border text-xs shadow-xs transition ${isMe ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-500/40' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`;
                div.innerHTML = `
                    <div>
                        <div class="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                            <span>${rec.modName}</span>
                            ${isMe ? '<span class="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-bold">You</span>' : ''}
                            <span class="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-mono font-bold">${rec.nightCount || rec.count} Nights</span>
                        </div>
                        <div class="font-mono text-slate-400 text-[11px] mt-0.5">📅 ${rec.startDate} ➔ ${rec.endDate}</div>
                    </div>
                    <div class="flex items-center gap-1.5">
                        ${currentUserRole === 'admin' ? `
                            <button type="button" onclick="triggerNightShiftWhatsApp(${rec.modSl}, '${rec.startDate}', '${rec.endDate}', ${rec.nightCount || rec.count})" 
                                    title="Send WhatsApp Notice" 
                                    class="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 transition">
                                <i class="fa-brands fa-whatsapp text-sm"></i>
                            </button>
                            <button type="button" onclick="deleteNightShiftRecord(${rec.id})" 
                                    title="Delete Record" 
                                    class="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-500/10 transition">
                                <i class="fa-solid fa-trash text-sm"></i>
                            </button>
                        ` : `
                            <span class="text-slate-400 font-mono text-xs">--</span>
                        `}
                    </div>
                `;
                listEl.appendChild(div);
            });
        }

        function deleteNightShiftRecord(id) {
            if (currentUserRole === 'moderator') {
                showToast('Deleting night shifts is restricted to In-Charge Admin.', 'info');
                return;
            }
            const idx = scheduledNightShifts.findIndex(r => r.id === id);
            if (idx === -1) return;
            if (confirm(`Remove Night Shift schedule for ${scheduledNightShifts[idx].modName}?`)) {
                const rec = scheduledNightShifts[idx];
                const mod = moderators.find(m => m.sl === rec.modSl);
                if (mod && rec.nightDutyDates) {
                    rec.nightDutyDates.forEach(d => {
                        const dayName = getDayNameForDate(d);
                        attendanceHistory[d] = attendanceHistory[d] || {};
                        const isWeekend = mod.weekend && dayName && (mod.weekend.toLowerCase() === dayName.toLowerCase());
                        const defSt = isWeekend ? 'Weekly Off' : 'Present';
                        attendanceHistory[d][String(mod.sl)] = defSt;
                        attendanceHistory[d][getModeratorKey(mod)] = defSt;
                    });
                }
                scheduledNightShifts.splice(idx, 1);
                saveToLocalStorage();
                renderNightShiftList();
                renderMonthlyNightShiftLog();
                renderDailyTable();
                if (activeView === 'monthly') renderMonthlyTable();
                showToast('Night shift schedule removed');
            }
        }

        function clearAllNightShifts(force = false) {
            if (currentUserRole === 'moderator') {
                showToast('Clearing night shifts is restricted to In-Charge Admin.', 'info');
                return;
            }

            if (!force && !confirm("Are you sure you want to clear ALL scheduled Night Shifts?\n\n• All night shift duty records will be removed.\n• All attendance cells with 'Night Shift' status will be reset back to regular status (Present / Weekly Off).\n• You can then assign all night duties manually.")) {
                return;
            }

            // 1. Reset scheduledNightShifts array
            scheduledNightShifts = [];

            // 2. Clean attendanceHistory: replace all 'Night Shift' entries
            Object.keys(attendanceHistory).forEach(dateStr => {
                const dayName = getDayNameForDate(dateStr);
                moderators.forEach(mod => {
                    const modKey = getModeratorKey(mod);
                    const slKey = String(mod.sl);
                    if (attendanceHistory[dateStr] && (attendanceHistory[dateStr][modKey] === 'Night Shift' || attendanceHistory[dateStr][slKey] === 'Night Shift')) {
                        const defSt = (mod.weekend.toLowerCase() === dayName.toLowerCase()) ? 'Weekly Off' : 'Present';
                        attendanceHistory[dateStr][modKey] = defSt;
                        attendanceHistory[dateStr][slKey] = defSt;
                    }
                });
            });

            // 3. Persist to storage
            localStorage.setItem('sanveesNightShifts', JSON.stringify([]));
            localStorage.setItem('sanveesAttendanceHistory', JSON.stringify(attendanceHistory));
            saveToLocalStorage();

            // 4. Update UI
            renderNightShiftList();
            renderMonthlyNightShiftLog();
            renderNightShiftRequestsList();
            renderDailyTable();
            if (activeView === 'monthly') renderMonthlyTable();

            showToast("🧹 All Night Shifts cleared! Ready for manual assignment.", "success");
        }

        function handleMonthlyNightMonthChange(newMonth) {
            monthlyNightShiftMonth = newMonth || currentActiveMonth;
            renderMonthlyNightShiftLog();
        }

        // ======================= AUTOMATED MONTHLY NIGHT ROSTER GENERATOR (3 MODERATORS/NIGHT) =======================
        function autoAssignMonthlyNightShifts(targetMonthStr) {
            if (currentUserRole === 'moderator') {
                showToast('Auto-assigning night shifts is restricted to In-Charge Admin.', 'info');
                return;
            }
            const selectedMonth = targetMonthStr || monthlyNightShiftMonth || currentActiveMonth || getCurrentMonthStr();
            const [yearStr, monthStr] = selectedMonth.split('-');
            const year = parseInt(yearStr, 10);
            const month = parseInt(monthStr, 10);
            const monthName = MONTH_NAMES[month - 1] || monthStr;
            const daysInMonth = new Date(year, month, 0).getDate();

            // Filter eligible moderators (exclude senior 5: Sajedul, Kowshiq, Najmul, Sujon, Sami)
            const eligibleMods = moderators.filter(m => !isModeratorNightExempt(m));
            if (eligibleMods.length < 3) {
                showToast('At least 3 eligible moderators required for night shift roster!', 'error');
                return;
            }

            // 1. Reset all prior 'Night Shift' entries for this month in attendance history
            for (let d = 1; d <= daysInMonth; d++) {
                const dateStr = `${yearStr}-${monthStr}-${String(d).padStart(2, '0')}`;
                initAttendanceForDate(dateStr);
                moderators.forEach(m => {
                    const modKey = getModeratorKey(m);
                    const slKey = String(m.sl);
                    if (attendanceHistory[dateStr][slKey] === 'Night Shift' || attendanceHistory[dateStr][modKey] === 'Night Shift') {
                        const dayName = getDayNameForDate(dateStr);
                        const defSt = (m.weekend === dayName) ? 'Weekly Off' : 'Present';
                        attendanceHistory[dateStr][slKey] = defSt;
                        attendanceHistory[dateStr][modKey] = defSt;
                    }
                });
            }

            // 2. Remove old scheduled night shifts overlapping this month
            scheduledNightShifts = scheduledNightShifts.filter(rec => {
                if (!rec.startDate || !rec.endDate) return true;
                const [sy, sm] = rec.startDate.split('-');
                const [ey, em] = rec.endDate.split('-');
                const recStartMonth = `${sy}-${sm}`;
                const recEndMonth = `${ey}-${em}`;
                return recStartMonth !== selectedMonth && recEndMonth !== selectedMonth;
            });

            // 3. Multi-slot allocation (3 concurrent moderators on night duty every night)
            const NUM_SLOTS = 3;
            const newRecords = [];
            const assignmentCounts = {};
            eligibleMods.forEach(m => { assignmentCounts[m.sl] = 0; });

            const dayAssignments = {};
            for (let d = 1; d <= daysInMonth; d++) {
                dayAssignments[d] = new Set();
            }

            for (let slot = 0; slot < NUM_SLOTS; slot++) {
                let curDay = 1;

                while (curDay <= daysInMonth) {
                    const curDateStr = `${yearStr}-${monthStr}-${String(curDay).padStart(2, '0')}`;
                    const curDayName = getDayNameForDate(curDateStr);
                    const curDayIdx = DAYS_MAP.indexOf(curDayName);

                    // Candidates must not have off-day today and not already assigned on curDay
                    const available = eligibleMods.filter(m => {
                        if (m.weekend.toLowerCase() === curDayName.toLowerCase()) return false;
                        if (dayAssignments[curDay].has(m.sl)) return false;
                        return true;
                    });

                    if (available.length === 0) {
                        curDay++;
                        continue;
                    }

                    // Pick candidate with fewest assignments in month, diversifying slots
                    let bestMod = null;
                    let bestScore = -999999;

                    available.forEach(m => {
                        const mOffIdx = DAYS_MAP.indexOf(m.weekend);
                        const daysUntilOff = (mOffIdx - curDayIdx + 7) % 7; // 1 to 6
                        const count = assignmentCounts[m.sl] || 0;

                        let score = - (count * 1000);
                        score += (daysUntilOff * 15);
                        if (curDay === 1) {
                            score += ((m.sl % NUM_SLOTS === slot) ? 40 : 0);
                        }
                        score -= (m.sl * 0.05);

                        if (score > bestScore) {
                            bestScore = score;
                            bestMod = m;
                        }
                    });

                    if (!bestMod) bestMod = available[0];

                    // Calculate duty dates from curDay until day before next weekly off
                    const nextOffDateStr = getNextWeekendForModerator(bestMod, curDateStr);
                    const [offY, offM, offD] = nextOffDateStr.split('-').map(Number);

                    const dutyDates = [];
                    let tempDate = new Date(year, month - 1, curDay);
                    const targetOffDate = new Date(offY, offM - 1, offD);

                    while (tempDate < targetOffDate && tempDate.getMonth() === (month - 1)) {
                        const dy = tempDate.getFullYear();
                        const dm = String(tempDate.getMonth() + 1).padStart(2, '0');
                        const dd = String(tempDate.getDate()).padStart(2, '0');
                        const dayNum = tempDate.getDate();

                        if (!dayAssignments[dayNum].has(bestMod.sl)) {
                            dutyDates.push(`${dy}-${dm}-${dd}`);
                            dayAssignments[dayNum].add(bestMod.sl);
                        }
                        tempDate.setDate(tempDate.getDate() + 1);
                    }

                    if (dutyDates.length === 0) {
                        curDay++;
                    } else {
                        dutyDates.forEach(dStr => {
                            setModeratorStatusForDate(bestMod, dStr, 'Night Shift');
                        });

                        assignmentCounts[bestMod.sl] = (assignmentCounts[bestMod.sl] || 0) + 1;

                        if (offM === month && offY === year && offD <= daysInMonth) {
                            setModeratorStatusForDate(bestMod, nextOffDateStr, 'Weekly Off');
                        }

                        const firstDate = dutyDates[0];
                        const lastDate = dutyDates[dutyDates.length - 1];

                        newRecords.push({
                            id: Date.now() + newRecords.length + Math.random(),
                            modSl: bestMod.sl,
                            modName: bestMod.name,
                            modPhone: bestMod.phone,
                            weekend: bestMod.weekend,
                            startDate: firstDate,
                            endDate: lastDate,
                            nextOffDate: nextOffDateStr,
                            count: dutyDates.length,
                            nightCount: dutyDates.length,
                            nightDutyDates: dutyDates
                        });

                        if (offM === month && offY === year) {
                            curDay = offD; // Next moderator starts on this moderator's off day
                        } else {
                            curDay = daysInMonth + 1;
                        }
                    }
                }
            }

            scheduledNightShifts = [...newRecords, ...scheduledNightShifts];

            saveToLocalStorage();
            renderMonthlyNightShiftLog();
            renderNightShiftList();
            renderNightShiftRequestsList();
            renderDailyTable();
            if (activeView === 'monthly') renderMonthlyTable();

            showToast(`✨ Night roster auto-assigned for ${monthName} ${yearStr} (3 moderators/night across ${newRecords.length} duty blocks)!`, 'success');
        }

        function triggerAutoAssignCurrentMonth() {
            if (currentUserRole === 'moderator') {
                showToast('Auto-assigning night shifts is restricted to In-Charge Admin.', 'info');
                return;
            }
            const selectedMonth = monthlyNightShiftMonth || currentActiveMonth || getCurrentMonthStr();
            const [yearStr, monthStr] = selectedMonth.split('-');
            const month = parseInt(monthStr, 10);
            const monthName = MONTH_NAMES[month - 1] || monthStr;

            if (confirm(`Automatically calculate and assign Night Shift Duty for ${monthName} ${yearStr}?\n\n• Exactly 3 moderators will work simultaneously every single night.\n• Duty schedule will run until the day before weekly off.\n• 5 Senior Moderators (Sajedul, Kowshiq, Najmul, Sujon, Sami) are exempted.\n• Continuous monthly distribution.`)) {
                autoAssignMonthlyNightShifts(selectedMonth);
            }
        }

        function renderMonthlyNightShiftLog() {
            const tbody = document.getElementById('monthly-night-table-body');
            if (!tbody) return;
            tbody.innerHTML = '';

            const selectedMonth = monthlyNightShiftMonth || currentActiveMonth || getCurrentMonthStr();
            const [yearStr, monthStr] = selectedMonth.split('-');
            const daysInMonth = new Date(parseInt(yearStr, 10), parseInt(monthStr, 10), 0).getDate();

            const assignedEntries = [];

            moderators.forEach((mod) => {
                const dutyDates = [];
                for (let d = 1; d <= daysInMonth; d++) {
                    const dateStr = `${yearStr}-${monthStr}-${String(d).padStart(2, '0')}`;
                    if (getModeratorStatusForDate(mod, dateStr) === 'Night Shift') {
                        dutyDates.push(dateStr);
                    }
                }

                if (dutyDates.length > 0) {
                    assignedEntries.push({
                        mod,
                        dutyDates,
                        firstDate: dutyDates[0],
                        lastDate: dutyDates[dutyDates.length - 1],
                        totalNights: dutyDates.length
                    });
                }
            });

            // Sort chronologically by first duty date in this month
            assignedEntries.sort((a, b) => a.firstDate.localeCompare(b.firstDate) || a.mod.sl - b.mod.sl);

            const countEl = document.getElementById('tab-night-monthly-count');
            if (countEl) countEl.innerText = assignedEntries.length;

            if (assignedEntries.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="6" class="p-8 text-center text-xs text-slate-400">
                            <div class="max-w-sm mx-auto space-y-2">
                                <i class="fa-solid fa-moon text-2xl text-slate-300 dark:text-slate-600 block"></i>
                                <p>No night shift duties scheduled for <strong class="text-slate-700 dark:text-slate-300 font-mono">${selectedMonth}</strong>.</p>
                                <button type="button" onclick="triggerAutoAssignCurrentMonth()" class="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md transition inline-flex items-center gap-2">
                                    <i class="fa-solid fa-wand-magic-sparkles text-amber-300"></i>
                                    <span>Auto Assign Month Roster</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                `;
                return;
            }

            assignedEntries.forEach((item, index) => {
                const slStr = String(index + 1).padStart(2, '0'); // Sequential 01, 02, 03...
                const datesFormatted = item.dutyDates.map(d => d.split('-')[2]).join(', ');
                const isEx = isModeratorNightExempt(item.mod);
                const isMe = (currentUserRole === 'moderator' && item.mod.sl === currentLoggedInModSl);

                const tr = document.createElement('tr');
                tr.className = `hover:bg-slate-50 dark:hover:bg-slate-800/50 transition border-b border-slate-100 dark:border-slate-800/80 ${isMe ? 'bg-purple-50/60 dark:bg-purple-950/30' : ''}`;
                tr.innerHTML = `
                    <td class="p-2.5 text-center font-mono font-bold text-slate-600 dark:text-slate-400">${slStr}</td>
                    <td class="p-2.5">
                        <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>${item.mod.name}</span>
                            ${isMe ? '<span class="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-bold">You</span>' : ''}
                            ${isEx ? '<span class="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium">Exempt Override</span>' : ''}
                        </div>
                        <div class="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                            <i class="fa-solid fa-phone text-[9px]"></i>
                            <span>${item.mod.phone}</span>
                        </div>
                    </td>
                    <td class="p-2.5 text-center">
                        <span class="inline-block px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold text-xs">
                            ${item.mod.weekend}
                        </span>
                    </td>
                    <td class="p-2.5 text-center font-mono font-black text-indigo-600 dark:text-indigo-400 text-sm">
                        ${item.totalNights}
                    </td>
                    <td class="p-2.5 font-mono text-[11px] text-slate-600 dark:text-slate-300">
                        <span class="font-bold text-slate-900 dark:text-slate-100">${item.firstDate.split('-')[2]} ➔ ${item.lastDate.split('-')[2]}</span>
                        <span class="text-[10px] text-slate-400 block">(${datesFormatted})</span>
                    </td>
                    <td class="p-2.5 text-center">
                        ${currentUserRole === 'admin' ? `
                            <button type="button" onclick="triggerNightShiftWhatsApp(${item.mod.sl}, '${item.firstDate}', '${item.lastDate}', ${item.totalNights})" 
                                    title="Send Night Shift Duty Notice to ${item.mod.name} via WhatsApp" 
                                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-bold text-xs shadow-xs transition active:scale-95">
                                <i class="fa-brands fa-whatsapp text-emerald-600 dark:text-emerald-400 text-sm"></i>
                                <span>WhatsApp</span>
                            </button>
                        ` : `
                            <span class="text-slate-400 font-mono text-xs">--</span>
                        `}
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        // ======================= NIGHT SHIFT EXEMPTION REQUEST SYSTEM =======================
        function openNightShiftRequestModal(preselectSl = null) {
            const selectEl = document.getElementById('req-mod-select');
            if (selectEl) {
                selectEl.innerHTML = '';
                const currentMod = getLoggedInModerator();
                const targetSl = preselectSl || (currentMod ? currentMod.sl : null);

                moderators.forEach(m => {
                    const opt = document.createElement('option');
                    opt.value = m.sl;
                    opt.innerText = `${String(m.sl).padStart(2, '0')} - ${m.name} (${m.weekend} Off)`;
                    if (targetSl && m.sl === targetSl) opt.selected = true;
                    selectEl.appendChild(opt);
                });

                if (currentUserRole === 'moderator' && currentMod) {
                    selectEl.value = currentMod.sl;
                    selectEl.disabled = true;
                } else {
                    selectEl.disabled = false;
                }
            }

            autoFillAssignedDutyDatesForRequest();
            const unavailInput = document.getElementById('req-unavailable-dates');
            const reasonInput = document.getElementById('req-reason-text');
            if (unavailInput) unavailInput.value = '';
            if (reasonInput) reasonInput.value = '';

            document.getElementById('night-shift-request-modal').classList.remove('hidden');
        }

        function closeNightShiftRequestModal() {
            document.getElementById('night-shift-request-modal')?.classList.add('hidden');
        }

        function autoFillAssignedDutyDatesForRequest() {
            const selectEl = document.getElementById('req-mod-select');
            const scheduleInput = document.getElementById('req-assigned-schedule');
            if (!selectEl || !scheduleInput) return;

            const sl = parseInt(selectEl.value, 10);
            const mod = moderators.find(m => m.sl === sl);
            if (!mod) return;

            const selectedMonth = monthlyNightShiftMonth || currentActiveMonth || getCurrentMonthStr();
            const [yearStr, monthStr] = selectedMonth.split('-');
            const daysInMonth = new Date(parseInt(yearStr, 10), parseInt(monthStr, 10), 0).getDate();

            const assignedDates = [];
            for (let d = 1; d <= daysInMonth; d++) {
                const dateStr = `${yearStr}-${monthStr}-${String(d).padStart(2, '0')}`;
                if (getModeratorStatusForDate(mod, dateStr) === 'Night Shift') {
                    assignedDates.push(String(d).padStart(2, '0'));
                }
            }

            if (assignedDates.length > 0) {
                scheduleInput.value = `${selectedMonth}: ${assignedDates[0]} to ${assignedDates[assignedDates.length - 1]} (${assignedDates.length} Nights: ${assignedDates.join(', ')})`;
            } else {
                scheduleInput.value = `No scheduled night shift in ${selectedMonth}`;
            }
        }

        function handleNightShiftRequestSubmit(e) {
            e.preventDefault();
            const selectEl = document.getElementById('req-mod-select');
            const sl = parseInt(selectEl.value, 10);
            const mod = moderators.find(m => m.sl === sl);
            if (!mod) return;

            const schedule = document.getElementById('req-assigned-schedule').value;
            const unavailableDates = document.getElementById('req-unavailable-dates').value.trim();
            const reason = document.getElementById('req-reason-text').value.trim();

            const newReq = {
                id: Date.now(),
                modSl: mod.sl,
                modName: mod.name,
                modPhone: mod.phone,
                modWeekend: mod.weekend,
                assignedSchedule: schedule,
                unavailableDates,
                reason,
                createdAt: new Date().toLocaleDateString('en-GB') + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                status: 'Pending'
            };

            nightShiftRequests.unshift(newReq);
            saveNightShiftRequests();
            renderNightShiftRequestsList();
            closeNightShiftRequestModal();

            showToast(`✅ Exemption request submitted directly to In-Charge Manik Sir!`, 'success');
        }

        function renderNightShiftRequestsList() {
            const listEl = document.getElementById('night-requests-list');
            const countEl = document.getElementById('tab-night-requests-count');
            const pendingCount = nightShiftRequests.filter(r => r.status === 'Pending').length;
            if (countEl) countEl.innerText = pendingCount;
            if (!listEl) return;
            listEl.innerHTML = '';

            if (nightShiftRequests.length === 0) {
                listEl.innerHTML = `<div class="p-4 text-center text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-2xl">No exemption requests found.</div>`;
                return;
            }

            nightShiftRequests.forEach(req => {
                const isMe = (currentUserRole === 'moderator' && req.modSl === currentLoggedInModSl);
                const statusBadge = req.status === 'Approved' 
                    ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">Approved</span>'
                    : req.status === 'Rejected'
                    ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/10 text-rose-600 border border-rose-500/20">Rejected</span>'
                    : '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 border border-amber-500/20 animate-pulse">Pending Review</span>';

                const div = document.createElement('div');
                div.className = `p-3 rounded-2xl border text-xs shadow-xs space-y-1.5 transition ${isMe ? 'bg-purple-50/60 dark:bg-purple-950/40 border-purple-500/40' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`;
                div.innerHTML = `
                    <div class="flex items-center justify-between">
                        <div class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span>${req.modName} (SL: ${String(req.modSl).padStart(2, '0')})</span>
                            ${isMe ? '<span class="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-bold">You</span>' : ''}
                        </div>
                        <div class="flex items-center gap-2">
                            ${statusBadge}
                            <span class="text-[10px] text-slate-400 font-mono">${req.createdAt}</span>
                        </div>
                    </div>
                    <div class="text-slate-600 dark:text-slate-300 text-xs pl-2 border-l-2 border-purple-500/40">
                        <div><strong>Requested Unavailable:</strong> <span class="text-rose-600 font-bold">${req.unavailableDates}</span></div>
                        <div><strong>Reason:</strong> ${req.reason}</div>
                        <div class="mt-1 text-slate-400 text-[10px]"><strong>Current Shift:</strong> ${req.assignedSchedule}</div>
                    </div>
                    <div class="flex items-center justify-end gap-2 pt-1">
                        ${currentUserRole === 'admin' ? `
                            <button type="button" onclick="triggerDirectWhatsApp('${req.modPhone}', '${req.modName}')" class="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 font-bold text-[11px] hover:bg-emerald-500/20 flex items-center gap-1">
                                <i class="fa-brands fa-whatsapp"></i> Chat
                            </button>
                            ${req.status === 'Pending' ? `
                                <button type="button" onclick="approveNightShiftRequest(${req.id})" class="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-xs">
                                    <i class="fa-solid fa-check mr-1"></i> Approve
                                </button>
                                <button type="button" onclick="rejectNightShiftRequest(${req.id})" class="px-2.5 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 font-bold text-[11px]">
                                    Reject
                                </button>
                            ` : `
                                <button type="button" onclick="deleteNightShiftRequest(${req.id})" class="px-2 py-1 text-slate-400 hover:text-rose-600 text-[11px]">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            `}
                        ` : ''}
                    </div>
                `;
                listEl.appendChild(div);
            });
        }

        function approveNightShiftRequest(reqId) {
            if (currentUserRole === 'moderator') {
                showToast('Approving requests is restricted to In-Charge Admin.', 'info');
                return;
            }
            const req = nightShiftRequests.find(r => r.id === reqId);
            if (!req) return;
            req.status = 'Approved';
            saveNightShiftRequests();
            renderNightShiftRequestsList();
            showToast(`✅ Request approved for ${req.modName}. You can now reassign or adjust their shift.`, 'success');
        }

        function rejectNightShiftRequest(reqId) {
            if (currentUserRole === 'moderator') {
                showToast('Rejecting requests is restricted to In-Charge Admin.', 'info');
                return;
            }
            const req = nightShiftRequests.find(r => r.id === reqId);
            if (!req) return;
            req.status = 'Rejected';
            saveNightShiftRequests();
            renderNightShiftRequestsList();
            showToast(`Request rejected for ${req.modName}`, 'info');
        }

        function deleteNightShiftRequest(reqId) {
            if (currentUserRole === 'moderator') {
                showToast('Deleting requests is restricted to In-Charge Admin.', 'info');
                return;
            }
            const idx = nightShiftRequests.findIndex(r => r.id === reqId);
            if (idx !== -1) {
                nightShiftRequests.splice(idx, 1);
                saveNightShiftRequests();
                renderNightShiftRequestsList();
                showToast('Request record deleted', 'info');
            }
        }

        // ======================= NIGHT SHIFT WHATSAPP INTEGRATION =======================
        function buildNightShiftWhatsAppMessage(mod, startDate, endDate, totalNights) {
            const startDay = getDayNameForDate(startDate);
            const endDay = getDayNameForDate(endDate);
            const nextOffDate = getNextWeekendForModerator(mod, startDate);
            
            return `Dear ${mod.name},\n\nYou have been scheduled for Night Shift Duty at Sanvee's by Tony.\n\n📅 Duty Period: ${startDate} (${startDay}) to ${endDate} (${endDay})\n🌙 Total Duty Nights: ${totalNights} Nights\n🏖️ Upcoming Weekly Off: ${mod.weekend} (${nextOffDate})\n\nPlease be prepared for your scheduled night duty and maintain proper roster handover.\n\nRegards,\nSheikh Shahmiran Manik\nModerator In-Charge, Sanvee's by Tony`;
        }

        function buildNightShiftWhatsAppURL(mod, startDate, endDate, totalNights) {
            const cleanPhone = (mod.phone || '').replace(/[^0-9]/g, '');
            const bdPhone = cleanPhone.startsWith('0') ? '88' + cleanPhone : cleanPhone;
            const message = buildNightShiftWhatsAppMessage(mod, startDate, endDate, totalNights);
            return `https://wa.me/${bdPhone}?text=${encodeURIComponent(message)}`;
        }

        function triggerNightShiftWhatsApp(modSl, startDate, endDate, totalNights) {
            if (currentUserRole === 'moderator') {
                showToast('WhatsApp notice dispatch is restricted to In-Charge Admin.', 'info');
                return;
            }
            const mod = moderators.find(m => m.sl === modSl);
            if (!mod) return;
            const url = buildNightShiftWhatsAppURL(mod, startDate, endDate, totalNights);
            window.open(url, '_blank');
            showToast(`📱 WhatsApp duty notice prepared for ${mod.name}!`, 'success');
        }

        function openNightShiftWhatsAppBatchModal() {
            if (currentUserRole === 'moderator') {
                showToast('Batch notice dispatch is restricted to In-Charge Admin.', 'info');
                return;
            }
            const selectedMonth = monthlyNightShiftMonth || currentActiveMonth || getCurrentMonthStr();
            const [yearStr, monthStr] = selectedMonth.split('-');
            const month = parseInt(monthStr, 10);
            const monthName = MONTH_NAMES[month - 1] || monthStr;
            const daysInMonth = new Date(parseInt(yearStr, 10), month, 0).getDate();

            const listEl = document.getElementById('night-whatsapp-batch-list');
            const subtitleEl = document.getElementById('night-whatsapp-modal-subtitle');
            if (subtitleEl) subtitleEl.innerText = `Night shift schedule notices for ${monthName} ${yearStr}`;
            if (!listEl) return;
            listEl.innerHTML = '';

            const assignedEntries = [];
            moderators.forEach((mod) => {
                const dutyDates = [];
                for (let d = 1; d <= daysInMonth; d++) {
                    const dateStr = `${yearStr}-${monthStr}-${String(d).padStart(2, '0')}`;
                    if (getModeratorStatusForDate(mod, dateStr) === 'Night Shift') dutyDates.push(dateStr);
                }
                if (dutyDates.length > 0) {
                    assignedEntries.push({
                        mod,
                        dutyDates,
                        firstDate: dutyDates[0],
                        lastDate: dutyDates[dutyDates.length - 1],
                        totalNights: dutyDates.length
                    });
                }
            });

            assignedEntries.sort((a, b) => a.firstDate.localeCompare(b.firstDate) || a.mod.sl - b.mod.sl);

            if (assignedEntries.length === 0) {
                listEl.innerHTML = `
                    <div class="p-6 text-center text-xs text-slate-400 space-y-2">
                        <p>No night duties scheduled for ${monthName} ${yearStr}.</p>
                        <button type="button" onclick="closeNightShiftWhatsAppBatchModal(); triggerAutoAssignCurrentMonth();" class="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs">
                            Auto Assign Now
                        </button>
                    </div>
                `;
            } else {
                assignedEntries.forEach((item, index) => {
                    const slStr = String(index + 1).padStart(2, '0');
                    const div = document.createElement('div');
                    div.className = "flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs shadow-xs";
                    div.innerHTML = `
                        <div class="flex items-center gap-3">
                            <span class="w-7 h-7 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono font-bold flex items-center justify-center text-xs">${slStr}</span>
                            <div>
                                <div class="font-bold text-slate-900 dark:text-white text-sm">${item.mod.name}</div>
                                <div class="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                                    📅 ${item.firstDate} ➔ ${item.lastDate} <strong class="text-indigo-600 dark:text-indigo-400 font-bold">(${item.totalNights} Nights)</strong> • Off: <span class="text-amber-600 dark:text-amber-400 font-bold">${item.mod.weekend}</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" onclick="triggerNightShiftWhatsApp(${item.mod.sl}, '${item.firstDate}', '${item.lastDate}', ${item.totalNights})" 
                                class="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition active:scale-95">
                            <i class="fa-brands fa-whatsapp text-sm"></i>
                            <span>Send Notice</span>
                        </button>
                    `;
                    listEl.appendChild(div);
                });
            }

            document.getElementById('night-whatsapp-batch-modal')?.classList.remove('hidden');
        }

        function closeNightShiftWhatsAppBatchModal() {
            document.getElementById('night-whatsapp-batch-modal')?.classList.add('hidden');
        }

        // ======================= PRINT NIGHT SHIFT REPORT =======================
        function printMonthlyNightReport() {
            if (currentUserRole === 'moderator') {
                showToast('Printing is restricted to In-Charge Admin.', 'info');
                return;
            }
            const picker = document.getElementById('monthly-night-month-picker');
            const selectedMonth = (picker && picker.value) || monthlyNightShiftMonth || currentActiveMonth || getCurrentMonthStr();
            const [yearStr, monthStr] = selectedMonth.split('-');
            const month = parseInt(monthStr, 10);
            const monthName = MONTH_NAMES[month - 1] || monthStr;
            const daysInMonth = new Date(parseInt(yearStr, 10), month, 0).getDate();

            const assignedEntries = [];
            moderators.forEach((mod) => {
                const dutyDates = [];
                for (let d = 1; d <= daysInMonth; d++) {
                    const dateStr = `${yearStr}-${monthStr}-${String(d).padStart(2, '0')}`;
                    if (getModeratorStatusForDate(mod, dateStr) === 'Night Shift') {
                        dutyDates.push(String(d).padStart(2, '0'));
                    }
                }

                if (dutyDates.length > 0) {
                    assignedEntries.push({
                        mod,
                        dutyDates,
                        firstDateNum: parseInt(dutyDates[0], 10),
                        totalNights: dutyDates.length
                    });
                }
            });

            assignedEntries.sort((a, b) => a.firstDateNum - b.firstDateNum || a.mod.sl - b.mod.sl);

            if (assignedEntries.length === 0) {
                showToast('No night shift records found for ' + monthName + ' ' + yearStr);
                return;
            }

            let rowsHtml = '';
            assignedEntries.forEach((item, index) => {
                const slStr = String(index + 1).padStart(2, '0');
                const firstDay = item.dutyDates[0];
                const lastDay = item.dutyDates[item.dutyDates.length - 1];
                rowsHtml += `
                    <tr>
                        <td style="text-align: center; font-family: monospace; font-weight: bold; width: 8%; padding: 6px;">${slStr}</td>
                        <td style="font-weight: bold; text-align: left; padding: 6px 8px; width: 28%;">${item.mod.name}</td>
                        <td style="text-align: center; color: #b45309; font-weight: bold; width: 14%; padding: 6px;">${item.mod.weekend}</td>
                        <td style="text-align: center; font-family: monospace; font-weight: bold; color: #4338ca; width: 12%; padding: 6px;">${item.totalNights}</td>
                        <td style="text-align: left; font-family: monospace; font-size: 8.5pt; padding: 6px 8px; width: 26%;">
                            ${firstDay} to ${lastDay} (${item.dutyDates.join(', ')})
                        </td>
                        <td style="text-align: center; width: 12%; font-size: 8pt; color: #475569; padding: 6px;">Sanctioned Night</td>
                    </tr>
                `;
            });

            const targetContainer = document.getElementById('view-night-report-container');
            targetContainer.innerHTML = `
                <div style="border: 2px solid #000; border-radius: 8px; padding: 12px 18px; text-align: center; margin-bottom: 12px; background-color: #f8fafc;">
                    <h1 style="font-size: 20pt; font-weight: 900; margin: 0 0 3px 0; text-transform: uppercase; letter-spacing: 1px; color: #000; font-family: 'Outfit', sans-serif;">
                        SANVEE'S BY TONY
                    </h1>
                    <div style="font-size: 11pt; font-weight: 800; text-transform: uppercase; color: #4338ca; margin-bottom: 6px;">
                        Monthly Night Shift Duty Report (${monthName} ${yearStr})
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 8.5pt; font-weight: bold; color: #334155; border-top: 1.5px solid #94a3b8; padding-top: 6px;">
                        <span>Month: ${monthName} ${yearStr}</span>
                        <span>Total Assigned Staff: ${assignedEntries.length} Members</span>
                        <span>In-Charge: Sheikh Shahmiran Manik</span>
                    </div>
                </div>
                <table style="width: 100%; border-collapse: collapse; border: 1.5px solid #000;">
                    <thead>
                        <tr style="background-color: #f1f5f9; font-weight: 800; text-transform: uppercase; border-bottom: 2px solid #000;">
                            <th style="width: 8%; text-align: center; padding: 6px;">SL</th>
                            <th style="width: 28%; text-align: left; padding: 6px 8px;">Moderator Name</th>
                            <th style="width: 14%; text-align: center; padding: 6px;">Weekly Off</th>
                            <th style="width: 12%; text-align: center; padding: 6px;">Total Nights</th>
                            <th style="width: 26%; text-align: left; padding: 6px 8px;">Duty Dates (${monthName})</th>
                            <th style="width: 12%; text-align: center; padding: 6px;">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                </table>
            `;

            let printStyle = document.getElementById('dynamic-print-orientation-style');
            if (!printStyle) {
                printStyle = document.createElement('style');
                printStyle.id = 'dynamic-print-orientation-style';
                document.head.appendChild(printStyle);
            }
            printStyle.innerHTML = `@media print { @page { size: A4 portrait; margin: 8mm 6mm; } }`;

            document.body.classList.add('print-night-active');
            window.print();

            setTimeout(() => {
                document.body.classList.remove('print-night-active');
                applyPrintOrientationSettings();
            }, 1000);
        }

        // ======================= LEAVES LOGIC =======================
        let activeLeaveTab = 'active';
        let monthlyLeaveMonth = '';

        function switchLeaveTab(tab) {
            activeLeaveTab = tab;
            const btnActive = document.getElementById('tab-btn-leave-active');
            const btnMonthly = document.getElementById('tab-btn-leave-monthly');
            const tabActive = document.getElementById('leave-tab-active');
            const tabMonthly = document.getElementById('leave-tab-monthly');

            if (tab === 'active') {
                btnActive.className = "flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5 bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm";
                btnMonthly.className = "flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
                tabActive.classList.remove('hidden');
                tabMonthly.classList.add('hidden');
                renderLeaveList();
            } else {
                btnMonthly.className = "flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5 bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm";
                btnActive.className = "flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
                tabMonthly.classList.remove('hidden');
                tabActive.classList.add('hidden');
                const picker = document.getElementById('monthly-leave-month-picker');
                if (picker && !picker.value) picker.value = currentActiveMonth || getCurrentMonthStr();
                renderMonthlyLeaveLog();
            }
        }

        function printMonthlyLeaveReport() {
            if (currentUserRole === 'moderator') {
                showToast('Printing is restricted to In-Charge Admin.', 'info');
                return;
            }
            const picker = document.getElementById('monthly-leave-month-picker');
            const selectedMonth = (picker && picker.value) || monthlyLeaveMonth || currentActiveMonth || getCurrentMonthStr();
            const [yearStr, monthStr] = selectedMonth.split('-');
            const month = parseInt(monthStr, 10);
            const monthName = MONTH_NAMES[month - 1] || monthStr;
            const daysInMonth = new Date(parseInt(yearStr, 10), month, 0).getDate();

            let rowsHtml = '';
            let count = 0;
            moderators.forEach((mod) => {
                const leaveDates = [];
                for (let d = 1; d <= daysInMonth; d++) {
                    const dateStr = `${yearStr}-${monthStr}-${String(d).padStart(2, '0')}`;
                    if (getModeratorStatusForDate(mod, dateStr) === 'Leave') {
                        leaveDates.push(String(d).padStart(2, '0'));
                    }
                }

                if (leaveDates.length > 0) {
                    count++;
                    const leaveRec = Array.isArray(approvedLeaves) ? approvedLeaves.find(l => 
                        l.modSl === mod.sl && 
                        (
                            leaveDates.some(d => {
                                const fullDate = `${yearStr}-${monthStr}-${d}`;
                                return fullDate >= l.startDate && fullDate <= l.endDate;
                            }) ||
                            (l.startDate && l.startDate.startsWith(selectedMonth)) ||
                            (l.endDate && l.endDate.startsWith(selectedMonth))
                        )
                    ) : null;
                    const approver = (leaveRec && leaveRec.approvedBy && leaveRec.approvedBy !== 'Sheikh Shahmiran Manik') ? leaveRec.approvedBy : 'General Manager';

                    rowsHtml += `
                        <tr>
                            <td style="text-align: center; font-family: monospace; font-weight: bold; width: 8%;">${String(count).padStart(2, '0')}</td>
                            <td style="font-weight: bold; text-align: left; padding-left: 8px; width: 28%;">${mod.name}</td>
                            <td style="text-align: center; font-weight: bold; color: #7e22ce; width: 20%;">${approver}</td>
                            <td style="text-align: center; font-family: monospace; font-weight: bold; color: #7e22ce; width: 12%;">${leaveDates.length}</td>
                            <td style="text-align: left; font-family: monospace; font-size: 8pt; padding-left: 8px; width: 20%;">${leaveDates.join(', ')}</td>
                            <td style="text-align: left; padding-left: 8px; width: 12%;">Sanctioned Leave</td>
                        </tr>
                    `;
                }
            });

            if (count === 0) {
                showToast('No approved leave records found for ' + monthName + ' ' + yearStr);
                return;
            }

            const targetContainer = document.getElementById('view-leave-report-container');
            targetContainer.innerHTML = `
                <div style="border: 2px solid #000; border-radius: 8px; padding: 12px 18px; text-align: center; margin-bottom: 12px; background-color: #f8fafc;">
                    <h1 style="font-size: 20pt; font-weight: 900; margin: 0 0 3px 0; text-transform: uppercase; letter-spacing: 1px; color: #000; font-family: 'Outfit', sans-serif;">
                        SANVEE'S BY TONY
                    </h1>
                    <div style="font-size: 11pt; font-weight: 800; text-transform: uppercase; color: #7e22ce; margin-bottom: 6px;">
                        Approved Leaves Management Report (${monthName} ${yearStr})
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 8.5pt; font-weight: bold; color: #334155; border-top: 1.5px solid #94a3b8; padding-top: 6px;">
                        <span>Month: ${monthName} ${yearStr}</span>
                        <span>Total Staff on Leave: ${count} Members</span>
                        <span>In-Charge: Sheikh Shahmiran Manik</span>
                    </div>
                </div>
                <table style="width: 100%; border-collapse: collapse; border: 1.5px solid #000;">
                    <thead>
                        <tr style="background-color: #f1f5f9; font-weight: 800; text-transform: uppercase; border-bottom: 2px solid #000;">
                            <th style="width: 8%; text-align: center; padding: 6px;">SL</th>
                            <th style="width: 28%; text-align: left; padding: 6px 8px;">Moderator Name</th>
                            <th style="width: 20%; text-align: center; padding: 6px;">Approved By</th>
                            <th style="width: 12%; text-align: center; padding: 6px;">Total Days</th>
                            <th style="width: 20%; text-align: left; padding: 6px 8px;">Leave Dates (${monthName})</th>
                            <th style="width: 12%; text-align: left; padding: 6px 8px;">Reason / Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                </table>
            `;

            let printStyle = document.getElementById('dynamic-print-orientation-style');
            if (!printStyle) {
                printStyle = document.createElement('style');
                printStyle.id = 'dynamic-print-orientation-style';
                document.head.appendChild(printStyle);
            }
            printStyle.innerHTML = `@media print { @page { size: A4 portrait; margin: 8mm 6mm; } }`;

            document.body.classList.add('print-leave-active');
            window.print();

            setTimeout(() => {
                document.body.classList.remove('print-leave-active');
                applyPrintOrientationSettings();
            }, 1000);
        }

        function openLeaveModal(preselectSl = null) {
            if (currentUserRole === 'moderator') {
                showToast('Leave management is restricted to In-Charge Admin.', 'info');
                return;
            }
            const selectEl = document.getElementById('leave-mod-select');
            selectEl.innerHTML = '';
            moderators.forEach(m => {
                const opt = document.createElement('option');
                opt.value = m.sl;
                opt.innerText = `${String(m.sl).padStart(2, '0')} - ${m.name} (${m.weekend} Off)`;
                if (preselectSl && m.sl === preselectSl) opt.selected = true;
                selectEl.appendChild(opt);
            });

            document.getElementById('leave-start-date').value = currentActiveDate;
            document.getElementById('leave-end-date').value = currentActiveDate;
            const reasonInput = document.getElementById('leave-reason');
            if (reasonInput) reasonInput.value = '';
            const approverSelect = document.getElementById('leave-approved-by');
            if (approverSelect) approverSelect.value = 'General Manager';
            switchLeaveTab('active');
            document.getElementById('approved-leave-modal').classList.remove('hidden');
        }

        function closeLeaveModal() {
            document.getElementById('approved-leave-modal').classList.add('hidden');
        }

        function handleLeaveSubmit(e) {
            e.preventDefault();
            const sl = parseInt(document.getElementById('leave-mod-select').value, 10);
            const mod = moderators.find(m => m.sl === sl);
            if (!mod) return;

            const startDate = document.getElementById('leave-start-date').value;
            const endDate = document.getElementById('leave-end-date').value;
            const approvedBy = document.getElementById('leave-approved-by').value;
            const reason = document.getElementById('leave-reason').value.trim() || 'Approved Leave';

            if (startDate > endDate) {
                alert('Start Date cannot be after End Date!');
                return;
            }

            const dates = getDatesInRange(startDate, endDate);
            dates.forEach(d => setModeratorStatusForDate(mod, d, 'Leave'));

            approvedLeaves.unshift({
                id: Date.now(),
                modSl: mod.sl,
                modName: mod.name,
                startDate,
                endDate,
                approvedBy,
                reason,
                count: dates.length
            });

            saveToLocalStorage();
            renderLeaveList();
            renderDailyTable();
            if (activeView === 'monthly') renderMonthlyTable();

            showToast(`Leave approved for ${mod.name}`, 'success');
            closeLeaveModal();
        }

        function renderLeaveList() {
            const listEl = document.getElementById('leave-records-list');
            if (!listEl) return;
            listEl.innerHTML = '';

            const activeLeaves = approvedLeaves.filter(rec => rec.endDate >= currentActiveDate);
            document.getElementById('tab-leave-active-count').innerText = activeLeaves.length;

            if (activeLeaves.length === 0) {
                listEl.innerHTML = `<div class="p-4 text-center text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-2xl">No active leaves.</div>`;
                return;
            }

            activeLeaves.forEach((rec) => {
                if (!rec.id) rec.id = Date.now() + Math.floor(Math.random() * 10000);
                const div = document.createElement('div');
                div.className = 'flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs';
                const approverLabel = (rec.approvedBy && rec.approvedBy !== 'Sheikh Shahmiran Manik') ? rec.approvedBy : 'General Manager';
                div.innerHTML = `
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-slate-900 dark:text-white text-sm">${rec.modName}</span>
                            <span class="px-2 py-0.5 rounded-md font-bold text-[10px] bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50">
                                Approved by: ${approverLabel}
                            </span>
                        </div>
                        <div class="font-mono text-slate-400 text-[11px] mt-0.5">${rec.startDate} ➔ ${rec.endDate} • ${rec.reason}</div>
                    </div>
                    <button onclick="deleteLeaveRecord(${rec.id})" class="p-2 text-slate-400 hover:text-rose-600">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                `;
                listEl.appendChild(div);
            });
        }

        function deleteLeaveRecord(id) {
            if (currentUserRole === 'moderator') {
                showToast('Deleting leave records is restricted to In-Charge Admin.', 'info');
                return;
            }
            const idx = approvedLeaves.findIndex(r => r.id === id);
            if (idx === -1) return;
            const rec = approvedLeaves[idx];
            if (confirm(`Remove approved leave for ${rec.modName}?`)) {
                const mod = moderators.find(m => m.sl === rec.modSl);
                if (mod) {
                    const dates = getDatesInRange(rec.startDate, rec.endDate);
                    dates.forEach(d => {
                        const dayName = getDayNameForDate(d);
                        const isWeekend = mod.weekend && dayName && (mod.weekend.toLowerCase() === dayName.toLowerCase());
                        const cur = getModeratorStatusForDate(mod, d);
                        if (cur === 'Leave') {
                            setModeratorStatusForDate(mod, d, isWeekend ? 'Weekly Off' : 'Present');
                        }
                    });
                }
                approvedLeaves.splice(idx, 1);
                saveToLocalStorage();
                renderLeaveList();
                renderMonthlyLeaveLog();
                renderDailyTable();
                updateDailyKPIs();
                if (activeView === 'monthly') renderMonthlyTable();
                showToast('Leave record removed and roster restored');
            }
        }

        function handleMonthlyLeaveMonthChange(newMonth) {
            monthlyLeaveMonth = newMonth || currentActiveMonth;
            renderMonthlyLeaveLog();
        }

        function renderMonthlyLeaveLog() {
            const tbody = document.getElementById('monthly-leave-table-body');
            if (!tbody) return;
            tbody.innerHTML = '';

            const selectedMonth = monthlyLeaveMonth || currentActiveMonth || getCurrentMonthStr();
            const [yearStr, monthStr] = selectedMonth.split('-');
            const daysInMonth = new Date(parseInt(yearStr, 10), parseInt(monthStr, 10), 0).getDate();
            let matchCount = 0;

            moderators.forEach((mod, idx) => {
                const leaveDates = [];
                for (let d = 1; d <= daysInMonth; d++) {
                    const dateStr = `${yearStr}-${monthStr}-${String(d).padStart(2, '0')}`;
                    if (getModeratorStatusForDate(mod, dateStr) === 'Leave') leaveDates.push(dateStr);
                }

                if (leaveDates.length > 0) {
                    matchCount++;
                    const leaveRec = Array.isArray(approvedLeaves) ? approvedLeaves.find(l => 
                        l.modSl === mod.sl && 
                        (
                            leaveDates.some(d => d >= l.startDate && d <= l.endDate) ||
                            (l.startDate && l.startDate.startsWith(selectedMonth)) ||
                            (l.endDate && l.endDate.startsWith(selectedMonth))
                        )
                    ) : null;
                    const approver = (leaveRec && leaveRec.approvedBy && leaveRec.approvedBy !== 'Sheikh Shahmiran Manik') ? leaveRec.approvedBy : 'General Manager';

                    const tr = document.createElement('tr');
                    tr.className = "hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition";
                    tr.innerHTML = `
                        <td class="p-2 text-center font-mono">${String(idx + 1).padStart(2, '0')}</td>
                        <td class="p-2 font-bold">${mod.name}</td>
                        <td class="p-2 text-center">
                            <select onchange="updateMonthlyLeaveApprover(${mod.sl}, '${selectedMonth}', this.value)"
                                    class="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold outline-none cursor-pointer hover:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition shadow-xs">
                                <option value="General Manager" ${approver === 'General Manager' ? 'selected' : ''}>General Manager</option>
                                <option value="CEO" ${approver === 'CEO' ? 'selected' : ''}>CEO</option>
                            </select>
                        </td>
                        <td class="p-2 text-center font-mono font-bold text-purple-600">${leaveDates.length}</td>
                        <td class="p-2 font-mono text-[10px] text-slate-500">${leaveDates.map(d => d.split('-')[2]).join(', ')}</td>
                        <td class="p-2 text-slate-400">Sanctioned Leave</td>
                    `;
                    tbody.appendChild(tr);
                }
            });

            const monthlyTabCount = document.getElementById('tab-leave-monthly-count');
            if (monthlyTabCount) monthlyTabCount.innerText = matchCount;

            if (matchCount === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-xs text-slate-400">No sanctioned leaves recorded for ${selectedMonth}.</td></tr>`;
            }
        }

        function updateMonthlyLeaveApprover(modSl, monthStr, newApprover) {
            if (currentUserRole === 'moderator') {
                showToast('Changing approver is restricted to Admin.', 'info');
                renderMonthlyLeaveLog();
                return;
            }
            let updated = false;
            if (Array.isArray(approvedLeaves)) {
                approvedLeaves.forEach(l => {
                    if (l.modSl === modSl && (
                        (l.startDate && l.startDate.startsWith(monthStr)) || 
                        (l.endDate && l.endDate.startsWith(monthStr)) || 
                        (l.startDate <= `${monthStr}-31` && l.endDate >= `${monthStr}-01`)
                    )) {
                        l.approvedBy = newApprover;
                        updated = true;
                    }
                });
            }
            if (!updated) {
                if (!Array.isArray(approvedLeaves)) approvedLeaves = [];
                const mod = moderators.find(m => m.sl === modSl);
                approvedLeaves.unshift({
                    id: Date.now(),
                    modSl: modSl,
                    modName: mod ? mod.name : '',
                    startDate: `${monthStr}-01`,
                    endDate: `${monthStr}-28`,
                    approvedBy: newApprover,
                    reason: 'Sanctioned Leave',
                    count: 1
                });
            }
            saveToLocalStorage();
            if (typeof syncAllDataToFirebase === 'function') syncAllDataToFirebase();
            showToast(`Approved By updated to ${newApprover} for SL #${String(modSl).padStart(2, '0')}`, 'success');
        }

        // ======================= WEEKEND EXCHANGE LOGIC =======================
        function openExchangeModal(preselectSl = null, customStartDate = null) {
            if (currentUserRole === 'moderator') {
                showToast('Exchange management is restricted to In-Charge Admin.', 'info');
                return;
            }
            const selectEl = document.getElementById('exchange-mod-select');
            selectEl.innerHTML = '';
            moderators.forEach(m => {
                const opt = document.createElement('option');
                opt.value = m.sl;
                opt.innerText = `${String(m.sl).padStart(2, '0')} - ${m.name} (${m.weekend} Off)`;
                if (preselectSl && m.sl === preselectSl) opt.selected = true;
                selectEl.appendChild(opt);
            });

            handleExchangeModSelectChange(customStartDate);
            renderExchangeList();
            document.getElementById('weekend-exchange-modal').classList.remove('hidden');
        }

        function closeExchangeModal() {
            document.getElementById('weekend-exchange-modal').classList.add('hidden');
        }

        function handleExchangeModSelectChange(preferredDate = null) {
            const sl = parseInt(document.getElementById('exchange-mod-select').value, 10);
            const mod = moderators.find(m => m.sl === sl);
            if (!mod) return;

            const baseDate = preferredDate || currentActiveDate || getTodayDateStr();
            const nearestWeekend = getNearestWeekendForModerator(mod, baseDate);

            document.getElementById('exchange-duty-date').value = nearestWeekend;
            document.getElementById('exchange-off-date').value = baseDate !== nearestWeekend ? baseDate : getNextWeekday(baseDate);

            updateExchangeDayLabels();
        }

        function getNearestWeekendForModerator(mod, fromDateStr) {
            if (!mod || !mod.weekend || !fromDateStr) return fromDateStr;
            const [y, m, d] = fromDateStr.split('-').map(Number);
            const baseDate = new Date(y, m - 1, d);
            const targetDay = mod.weekend.toLowerCase();

            let bestDate = fromDateStr;
            let minDiff = 999;
            for (let i = -3; i <= 6; i++) {
                const checkDate = new Date(baseDate);
                checkDate.setDate(checkDate.getDate() + i);
                const cy = checkDate.getFullYear();
                const cm = String(checkDate.getMonth() + 1).padStart(2, '0');
                const cd = String(checkDate.getDate()).padStart(2, '0');
                const dateStr = `${cy}-${cm}-${cd}`;
                if (getDayNameForDate(dateStr).toLowerCase() === targetDay) {
                    if (Math.abs(i) < minDiff) {
                        minDiff = Math.abs(i);
                        bestDate = dateStr;
                    }
                }
            }
            return bestDate;
        }

        function getNextWeekday(fromDateStr) {
            const [y, m, d] = fromDateStr.split('-').map(Number);
            const baseDate = new Date(y, m - 1, d);
            baseDate.setDate(baseDate.getDate() + 1);
            const cy = baseDate.getFullYear();
            const cm = String(baseDate.getMonth() + 1).padStart(2, '0');
            const cd = String(baseDate.getDate()).padStart(2, '0');
            return `${cy}-${cm}-${cd}`;
        }

        function updateExchangeDayLabels() {
            const dutyVal = document.getElementById('exchange-duty-date').value;
            const offVal = document.getElementById('exchange-off-date').value;
            if (dutyVal) document.getElementById('exchange-duty-day-label').innerText = `Duty: ${dutyVal} (${getDayNameForDate(dutyVal)}) ➔ Set to Present`;
            if (offVal) document.getElementById('exchange-off-day-label').innerText = `Off: ${offVal} (${getDayNameForDate(offVal)}) ➔ Set to Exchange`;
        }

        function handleExchangeSubmit(e) {
            e.preventDefault();
            if (currentUserRole === 'moderator') {
                showToast('Submitting weekend exchange is restricted to In-Charge Admin.', 'info');
                return;
            }
            const sl = parseInt(document.getElementById('exchange-mod-select').value, 10);
            const mod = moderators.find(m => m.sl === sl);
            if (!mod) return;

            const dutyDate = document.getElementById('exchange-duty-date').value;
            const offDate = document.getElementById('exchange-off-date').value;
            const reason = document.getElementById('exchange-reason').value.trim() || 'Weekend off exchanged';

            setModeratorStatusForDate(mod, dutyDate, 'Present');
            setModeratorStatusForDate(mod, offDate, 'Weekend Exchange');

            weekendExchanges.unshift({
                id: Date.now(),
                modSl: mod.sl,
                modName: mod.name,
                dutyDate,
                offDate,
                reason
            });

            saveToLocalStorage();
            renderExchangeList();
            renderDailyTable();
            if (activeView === 'monthly') renderMonthlyTable();

            showToast(`Weekend Exchange recorded for ${mod.name}`, 'success');
        }

        function renderExchangeList() {
            const listEl = document.getElementById('exchange-records-list');
            listEl.innerHTML = '';

            if (weekendExchanges.length === 0) {
                listEl.innerHTML = '<div class="text-xs text-slate-400 py-2 text-center">No weekend exchange records found.</div>';
                return;
            }

            weekendExchanges.forEach((rec) => {
                if (!rec.id) rec.id = Date.now() + Math.floor(Math.random() * 10000);
                const div = document.createElement('div');
                div.className = 'flex items-center justify-between p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs';
                div.innerHTML = `
                    <div>
                        <div class="font-bold text-slate-900 dark:text-white">${rec.modName}</div>
                        <div class="font-mono text-slate-400 text-[11px]">Duty: ${rec.dutyDate} ➔ Off: ${rec.offDate}</div>
                    </div>
                    <button onclick="deleteExchangeRecord(${rec.id})" class="p-1.5 text-slate-400 hover:text-rose-600">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                `;
                listEl.appendChild(div);
            });
        }

        function deleteExchangeRecord(id) {
            if (currentUserRole === 'moderator') {
                showToast('Deleting weekend exchange records is restricted to In-Charge Admin.', 'info');
                return;
            }
            const idx = weekendExchanges.findIndex(r => r.id === id);
            if (idx === -1) return;
            const rec = weekendExchanges[idx];
            if (confirm(`Remove Weekend Exchange record for ${rec.modName}?`)) {
                const mod = moderators.find(m => m.sl === rec.modSl);
                if (mod) {
                    // Revert dutyDate: dutyDate was originally their Weekly Off day
                    const dutyDayName = getDayNameForDate(rec.dutyDate);
                    const isDutyWeekend = mod.weekend && dutyDayName && (mod.weekend.toLowerCase() === dutyDayName.toLowerCase());
                    setModeratorStatusForDate(mod, rec.dutyDate, isDutyWeekend ? 'Weekly Off' : 'Present');

                    // Revert offDate: offDate was originally their regular working day
                    const offDayName = getDayNameForDate(rec.offDate);
                    const isOffWeekend = mod.weekend && offDayName && (mod.weekend.toLowerCase() === offDayName.toLowerCase());
                    setModeratorStatusForDate(mod, rec.offDate, isOffWeekend ? 'Weekly Off' : 'Present');
                }
                weekendExchanges.splice(idx, 1);
                saveToLocalStorage();
                renderExchangeList();
                renderDailyTable();
                updateDailyKPIs();
                if (activeView === 'monthly') renderMonthlyTable();
                showToast('Weekend exchange removed and roster restored');
            }
        }

        // ======================= ABSENT NOTICES & DIRECT WHATSAPP =======================
        function getAbsentNoticeMessage(name, dateStr = currentActiveDate) {
            const dayName = getDayNameForDate(dateStr);
            return `Dear ${name}\n\nYou have been marked absent from today's (${dateStr}, ${dayName}) scheduled duty roster at Sanvee's by Tony. As this is your regular working day and no prior leave was approved, please state the reason for your absence today and contact me immediately.\n\nRegards,\nSheikh Shahmiran Manik\nModerator In-Charge, Sanvee's by Tony`;
        }

        function buildWhatsAppURL(phone, name, isAbsentAlert = false, dateStr = currentActiveDate) {
            const cleanPhone = (phone || '').replace(/[^0-9]/g, '');
            const bdPhone = cleanPhone.startsWith('0') ? '88' + cleanPhone : cleanPhone;
            const message = isAbsentAlert ? getAbsentNoticeMessage(name, dateStr) : `Dear ${name},\n\nI am contacting you regarding your duty shift at Sanvee's by Tony.\n\nRegards,\nSheikh Shahmiran Manik\nModerator In-Charge, Sanvee's by Tony`;
            return `https://wa.me/${bdPhone}?text=${encodeURIComponent(message)}`;
        }

        function triggerDirectWhatsApp(phone, name, isAbsentAlert = false, dateStr = currentActiveDate) {
            if (currentUserRole === 'moderator') {
                showToast('WhatsApp notice dispatch is restricted to In-Charge Admin.', 'info');
                return;
            }
            window.open(buildWhatsAppURL(phone, name, isAbsentAlert, dateStr), '_blank');
        }

        function openAbsentAlertModal(mod, targetDate = currentActiveDate) {
            if (currentUserRole === 'moderator') {
                showToast('Absent alerts are restricted to In-Charge Admin.', 'info');
                return;
            }
            const dayName = getDayNameForDate(targetDate);
            document.getElementById('alert-mod-name').innerText = mod.name;
            document.getElementById('alert-today-day').innerText = `${targetDate} (${dayName})`;
            document.getElementById('alert-mod-weekend').innerText = mod.weekend;
            document.getElementById('alert-message-preview').innerText = getAbsentNoticeMessage(mod.name, targetDate);

            document.getElementById('alert-send-wa-btn').onclick = () => {
                triggerDirectWhatsApp(mod.phone, mod.name, true, targetDate);
                closeAbsentAlertModal();
            };

            document.getElementById('absent-alert-modal').classList.remove('hidden');
        }

        function closeAbsentAlertModal() {
            document.getElementById('absent-alert-modal').classList.add('hidden');
        }

        function openUnexcusedModal() {
            if (currentUserRole === 'moderator') {
                showToast('Absent alerts are restricted to In-Charge Admin.', 'info');
                return;
            }
            const dayName = getDayNameForDate(currentActiveDate);
            const listEl = document.getElementById('bulk-absent-list');
            listEl.innerHTML = "";

            const unexcused = moderators.filter(m => getModeratorStatusForDate(m, currentActiveDate) === 'Absent' && !(m.weekend && dayName && m.weekend.toLowerCase() === dayName.toLowerCase()));

            if (unexcused.length === 0) {
                listEl.innerHTML = `<div class="text-center py-6 text-slate-400 font-semibold">No unexcused absentees on ${currentActiveDate}.</div>`;
            } else {
                unexcused.forEach(m => {
                    const div = document.createElement('div');
                    div.className = "flex items-center justify-between p-3 rounded-2xl bg-slate-100 dark:bg-slate-800";
                    div.innerHTML = `
                        <div>
                            <span class="font-bold text-slate-900 dark:text-white text-sm block">${m.name}</span>
                            <span class="text-xs text-slate-400 font-mono">${m.phone} • Off: ${m.weekend}</span>
                        </div>
                        <button onclick="triggerDirectWhatsApp('${m.phone}', '${m.name}', true, '${currentActiveDate}')" class="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5">
                            <i class="fa-brands fa-whatsapp"></i> Send Notice
                        </button>
                    `;
                    listEl.appendChild(div);
                });
            }

            document.getElementById('bulk-unexcused-modal').classList.remove('hidden');
        }

        function closeBulkUnexcusedModal() {
            document.getElementById('bulk-unexcused-modal').classList.add('hidden');
        }

        function handleAbsentCardClick() {
            if (currentUserRole === 'moderator') {
                showToast('Absent notices are restricted to In-Charge Admin.', 'info');
                return;
            }
            openUnexcusedModal();
        }

        // ======================= ADD / EDIT / DELETE MODERATOR =======================
        function openAddModal() {
            if (currentUserRole === 'moderator') {
                showToast('Adding moderators is restricted to In-Charge Admin.', 'info');
                return;
            }
            document.getElementById('form-edit-index').value = "-1";
            document.getElementById('modal-title').innerText = "Add Moderator";
            document.getElementById('form-name').value = "";
            document.getElementById('form-weekend').value = "Saturday";
            document.getElementById('form-phone').value = "";
            
            const now = new Date();
            document.getElementById('form-join').value = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}`;
            updateFormTenurePreview();
            updateFormCalculatedSl();

            document.getElementById('moderator-modal').classList.remove('hidden');
        }

        function openEditModal(index) {
            if (currentUserRole === 'moderator') {
                showToast('Editing moderators is restricted to In-Charge Admin.', 'info');
                return;
            }
            const mod = moderators[index];
            document.getElementById('form-edit-index').value = index;
            document.getElementById('modal-title').innerText = "Edit Moderator";
            document.getElementById('form-sl').value = mod.sl;
            document.getElementById('form-name').value = mod.name;
            document.getElementById('form-weekend').value = mod.weekend;
            document.getElementById('form-phone').value = mod.phone;
            document.getElementById('form-join').value = mod.join;
            updateFormTenurePreview();
            updateFormCalculatedSl();

            document.getElementById('moderator-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('moderator-modal').classList.add('hidden');
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            if (currentUserRole === 'moderator') {
                showToast('Modifying moderators is restricted to In-Charge Admin.', 'info');
                return;
            }
            const editIndex = parseInt(document.getElementById('form-edit-index').value, 10);
            const weekendVal = document.getElementById('form-weekend').value;
            const nameVal = document.getElementById('form-name').value.trim();
            const phoneVal = document.getElementById('form-phone').value.trim();
            const joinVal = document.getElementById('form-join').value.trim();

            if (editIndex >= 0) {
                const mod = moderators[editIndex];
                mod.name = nameVal;
                mod.weekend = weekendVal;
                mod.phone = phoneVal;
                mod.join = joinVal;

                sortAndReindexModerators();
                saveToLocalStorage();
                showToast(`Updated ${nameVal}`);
            } else {
                const newMod = {
                    id: 'mod_' + (phoneVal.replace(/\D/g, '') || Date.now()) + '_' + Math.random().toString(36).substring(2, 7),
                    name: nameVal,
                    weekend: weekendVal,
                    phone: phoneVal,
                    join: joinVal,
                    status: "Present",
                    notes: ""
                };
                moderators.push(newMod);
                sortAndReindexModerators();
                initAttendanceForDate(currentActiveDate);
                saveToLocalStorage();
                showToast(`Added ${nameVal}`);
            }

            closeModal();
            renderDailyTable();
            if (activeView === 'monthly') renderMonthlyTable();
        }

        function deleteModerator(index) {
            if (currentUserRole === 'moderator') {
                showToast('Deleting moderators is restricted to In-Charge Admin.', 'info');
                return;
            }
            const mod = moderators[index];
            if (!mod) return;
            const deletedSl = mod.sl;
            const deletedKey = getModeratorKey(mod);
            const deletedPhone = mod.phone;
            if (confirm(`Are you sure you want to remove ${mod.name} (SL #${String(mod.sl).padStart(2, '0')})?`)) {
                // Clean up deleted moderator's records across all state data
                if (attendanceHistory && typeof attendanceHistory === 'object') {
                    const delKey = String(deletedSl);
                    Object.keys(attendanceHistory).forEach(d => {
                        if (attendanceHistory[d]) {
                            if (deletedKey) delete attendanceHistory[d][deletedKey];
                            delete attendanceHistory[d][delKey];
                            if (deletedPhone) delete attendanceHistory[d][deletedPhone];
                        }
                    });
                }
                if (Array.isArray(scheduledNightShifts)) {
                    scheduledNightShifts = scheduledNightShifts.filter(s => s.modSl !== deletedSl && s.sl !== deletedSl && (!deletedKey || s.modId !== deletedKey));
                }
                if (Array.isArray(approvedLeaves)) {
                    approvedLeaves = approvedLeaves.filter(l => l.modSl !== deletedSl && (!deletedKey || l.modId !== deletedKey));
                }
                if (Array.isArray(weekendExchanges)) {
                    weekendExchanges = weekendExchanges.filter(e => e.modSl !== deletedSl && (!deletedKey || e.modId !== deletedKey));
                }
                if (Array.isArray(nightShiftRequests)) {
                    nightShiftRequests = nightShiftRequests.filter(r => r.modSl !== deletedSl && (!deletedKey || r.modId !== deletedKey));
                }

                moderators.splice(index, 1);
                sortAndReindexModerators();
                saveToLocalStorage();
                renderDailyTable();
                updateDailyKPIs();
                if (activeView === 'monthly') renderMonthlyTable();
                showToast(`Removed ${mod.name}`);
            }
        }

        // ======================= AUTH & ROLE-BASED ACCESS CONTROL =======================
        const AUTH_CONFIG = {
            username: "admin",
            defaultPassword: "@Manik1243",
            storageKey: "sanvees_auth_token",
            passwordStorageKey: "sanvees_admin_password",
            getPassword() {
                return localStorage.getItem(this.passwordStorageKey) || this.defaultPassword;
            },
            setPassword(newPass) {
                localStorage.setItem(this.passwordStorageKey, newPass);
            },
            resetDefaultPassword() {
                localStorage.removeItem(this.passwordStorageKey);
            }
        };

        let currentLoginRole = 'admin'; // 'admin' | 'moderator'
        let currentUserRole = localStorage.getItem('sanvees_user_role') || sessionStorage.getItem('sanvees_user_role') || 'admin';
        let currentLoggedInModSl = parseInt(localStorage.getItem('sanvees_logged_in_mod_sl') || sessionStorage.getItem('sanvees_logged_in_mod_sl'), 10) || null;

        function switchLoginRole(role) {
            currentLoginRole = role;
            const btnAdmin = document.getElementById('btn-auth-tab-admin');
            const btnMod = document.getElementById('btn-auth-tab-moderator');
            const adminFields = document.getElementById('auth-admin-fields');
            const modFields = document.getElementById('auth-moderator-fields');
            const pwdLabel = document.getElementById('auth-password-label');
            const modHint = document.getElementById('auth-moderator-hint');
            const roleBadge = document.getElementById('auth-role-badge');
            const submitText = document.getElementById('btn-login-submit-text');
            const errorBanner = document.getElementById('login-error-banner');
            if (errorBanner) errorBanner.classList.add('hidden');

            if (role === 'admin') {
                if (btnAdmin) btnAdmin.className = "flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5 bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(2,132,199,0.5)]";
                if (btnMod) btnMod.className = "flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5 text-slate-400 hover:text-white";
                if (adminFields) adminFields.classList.remove('hidden');
                if (modFields) modFields.classList.add('hidden');
                if (pwdLabel) pwdLabel.innerText = "Access Password";
                if (modHint) modHint.classList.add('hidden');
                if (roleBadge) {
                    roleBadge.innerText = "Role: In-Charge (Admin)";
                    roleBadge.className = "text-xs text-sky-400 font-mono font-bold";
                }
                if (submitText) submitText.innerText = "Unlock Dashboard";
            } else {
                if (btnMod) btnMod.className = "flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 font-black shadow-[0_0_20px_rgba(245,158,11,0.4)]";
                if (btnAdmin) btnAdmin.className = "flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5 text-slate-400 hover:text-white";
                if (adminFields) adminFields.classList.add('hidden');
                if (modFields) modFields.classList.remove('hidden');
                if (pwdLabel) pwdLabel.innerText = "Moderator PIN";
                if (modHint) modHint.classList.remove('hidden');
                if (roleBadge) {
                    roleBadge.innerText = "Role: Moderator (View-Only)";
                    roleBadge.className = "text-xs text-amber-400 font-mono font-bold";
                }
                if (submitText) submitText.innerText = "Open Moderator Portal";
                populateLoginModeratorSelect();
            }
        }

        function populateLoginModeratorSelect() {
            const selectEl = document.getElementById('login-mod-select');
            if (!selectEl) return;
            selectEl.innerHTML = '';
            moderators.forEach(m => {
                const opt = document.createElement('option');
                opt.value = m.sl;
                opt.innerText = `${String(m.sl).padStart(2, '0')} - ${m.name} (${m.weekend} Off)`;
                selectEl.appendChild(opt);
            });
        }

        function getLoggedInModerator() {
            if (currentUserRole !== 'moderator' || !currentLoggedInModSl) return null;
            return moderators.find(m => m.sl === currentLoggedInModSl) || null;
        }

        function applyRolePermissions() {
            const isMod = (currentUserRole === 'moderator');
            document.body.classList.toggle('role-moderator', isMod);

            const modBanner = document.getElementById('moderator-logged-in-banner');
            const nightAssignForm = document.getElementById('night-assign-form');
            const nightModHelperBanner = document.getElementById('night-mod-helper-banner');
            const autoAssignBtn = document.getElementById('btn-night-auto-assign');
            const nightClearAllBtn = document.getElementById('btn-night-clear-all');
            const nightClearMonthlyBtn = document.getElementById('btn-night-clear-monthly');
            
            // Header and Dashboard Admin Controls
            const addModBtn = document.getElementById('btn-add-moderator');
            const firebaseBtn = document.getElementById('btn-firebase-sync');
            const opsHubWrapper = document.getElementById('wrapper-operations-hub');
            const adminMenuWrapper = document.getElementById('wrapper-admin-menu');
            const modLogoutBtn = document.getElementById('btn-moderator-logout');
            const headerRoleBadge = document.getElementById('header-role-badge');
            const bulkMarkBtn = document.getElementById('btn-bulk-mark-present');
            const singleModEditBtn = document.getElementById('single-mod-edit-btn');
            const singleModWaBtn = document.getElementById('single-mod-wa-btn');

            // Print and WhatsApp specific buttons
            const printMatrixBtn = document.getElementById('btn-print-monthly-matrix');
            const printNightBtn = document.getElementById('btn-print-night-report');
            const printLeaveBtn = document.getElementById('btn-print-leave-report');
            const nightWaAllBtn = document.getElementById('btn-night-whatsapp-all');
            const absentCardTag = document.getElementById('sub-absent-card-tag');
            const matrixTipText = document.getElementById('monthly-matrix-tip-text');

            const currentMod = getLoggedInModerator();

            if (isMod) {
                // HIDE Admin controls & Edit buttons
                if (addModBtn) addModBtn.classList.add('hidden');
                if (firebaseBtn) firebaseBtn.classList.add('hidden');
                if (opsHubWrapper) opsHubWrapper.classList.add('hidden');
                if (adminMenuWrapper) adminMenuWrapper.classList.add('hidden');
                if (bulkMarkBtn) bulkMarkBtn.classList.add('hidden');
                if (singleModEditBtn) singleModEditBtn.classList.add('hidden');
                if (singleModWaBtn) singleModWaBtn.classList.add('hidden');

                // HIDE ALL Print buttons
                if (printMatrixBtn) printMatrixBtn.classList.add('hidden');
                if (printNightBtn) printNightBtn.classList.add('hidden');
                if (printLeaveBtn) printLeaveBtn.classList.add('hidden');

                // HIDE ALL WhatsApp action buttons
                if (nightWaAllBtn) nightWaAllBtn.classList.add('hidden');
                if (absentCardTag) absentCardTag.innerHTML = '<span>View Status</span>';

                // Update Tip Text
                if (matrixTipText) {
                    matrixTipText.innerHTML = '<b>Tip:</b> Viewing attendance matrix. Click on any moderator\'s name to view isolated stats.';
                }

                // SHOW Moderator Specific Controls
                if (modLogoutBtn) modLogoutBtn.classList.remove('hidden');

                // Update Header Role Badge
                if (headerRoleBadge) {
                    headerRoleBadge.innerText = 'Moderator View';
                    headerRoleBadge.className = 'px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 font-extrabold text-[11px] border border-purple-500/20 leading-none';
                }

                // Show Moderator Banner with details
                if (modBanner) {
                    modBanner.classList.remove('hidden');
                    if (currentMod) {
                        document.getElementById('mod-banner-sl').innerText = String(currentMod.sl).padStart(2, '0');
                        document.getElementById('mod-banner-name').innerText = currentMod.name;
                        document.getElementById('mod-banner-weekend-info').innerText = `Weekly Off: ${currentMod.weekend} • Join: ${currentMod.join}`;
                        
                        // Check current month night duty
                        const selectedMonth = currentActiveMonth || getCurrentMonthStr();
                        const [yearStr, monthStr] = selectedMonth.split('-');
                        const daysInMonth = new Date(parseInt(yearStr, 10), parseInt(monthStr, 10), 0).getDate();
                        const myDutyDays = [];
                        for (let d = 1; d <= daysInMonth; d++) {
                            const dStr = `${yearStr}-${monthStr}-${String(d).padStart(2, '0')}`;
                            if (getModeratorStatusForDate(currentMod, dStr) === 'Night Shift') myDutyDays.push(dStr.split('-')[2]);
                        }

                        const nightInfoEl = document.getElementById('mod-banner-night-info');
                        if (nightInfoEl) {
                            if (myDutyDays.length > 0) {
                                nightInfoEl.innerHTML = `🌙 Scheduled Night Duty: <b class="text-indigo-600 dark:text-indigo-300 font-mono">${myDutyDays[0]} to ${myDutyDays[myDutyDays.length - 1]} (${myDutyDays.length} Nights)</b>`;
                            } else {
                                nightInfoEl.innerHTML = `🌙 No night duty scheduled this month`;
                            }
                        }
                    }
                }

                // Night Shift Modal restrictions
                if (nightAssignForm) nightAssignForm.classList.add('hidden');
                if (nightModHelperBanner) nightModHelperBanner.classList.remove('hidden');
                if (autoAssignBtn) autoAssignBtn.classList.add('hidden');
                if (nightClearAllBtn) nightClearAllBtn.classList.add('hidden');
                if (nightClearMonthlyBtn) nightClearMonthlyBtn.classList.add('hidden');

            } else {
                // SHOW Admin controls in In-Charge (Admin) View
                if (addModBtn) addModBtn.classList.remove('hidden');
                if (firebaseBtn) firebaseBtn.classList.remove('hidden');
                if (opsHubWrapper) opsHubWrapper.classList.remove('hidden');
                if (adminMenuWrapper) adminMenuWrapper.classList.remove('hidden');
                if (bulkMarkBtn) bulkMarkBtn.classList.remove('hidden');
                if (singleModEditBtn) singleModEditBtn.classList.remove('hidden');
                if (singleModWaBtn) singleModWaBtn.classList.remove('hidden');

                // SHOW Print buttons
                if (printMatrixBtn) printMatrixBtn.classList.remove('hidden');
                if (printNightBtn) printNightBtn.classList.remove('hidden');
                if (printLeaveBtn) printLeaveBtn.classList.remove('hidden');

                // SHOW WhatsApp action buttons
                if (nightWaAllBtn) nightWaAllBtn.classList.remove('hidden');
                if (absentCardTag) absentCardTag.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Auto Notice';

                // Update Tip Text
                if (matrixTipText) {
                    matrixTipText.innerHTML = '<b>Tip:</b> Click on any day cell to edit attendance. Click on any moderator\'s name to view isolated stats.';
                }

                // HIDE Moderator Specific Controls
                if (modLogoutBtn) modLogoutBtn.classList.add('hidden');

                // Update Header Role Badge
                if (headerRoleBadge) {
                    headerRoleBadge.innerText = 'In-Charge';
                    headerRoleBadge.className = 'px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-extrabold text-[11px] border border-indigo-500/20 leading-none';
                }

                // Hide Moderator Banner
                if (modBanner) modBanner.classList.add('hidden');

                // Night Shift Modal permissions
                if (nightAssignForm) nightAssignForm.classList.remove('hidden');
                if (nightModHelperBanner) nightModHelperBanner.classList.add('hidden');
                if (autoAssignBtn) autoAssignBtn.classList.remove('hidden');
                if (nightClearAllBtn) nightClearAllBtn.classList.remove('hidden');
                if (nightClearMonthlyBtn) nightClearMonthlyBtn.classList.remove('hidden');
            }
        }

        function isAuthenticated() {
            const token = localStorage.getItem(AUTH_CONFIG.storageKey) || sessionStorage.getItem(AUTH_CONFIG.storageKey);
            return token === "AUTHENTICATED" || token === "MODERATOR_AUTHENTICATED";
        }

        function checkAuthStatus() {
            const loginScreen = document.getElementById('login-screen');
            const mainApp = document.getElementById('main-app-wrapper');
            if (isAuthenticated()) {
                loginScreen.classList.add('hidden');
                mainApp.classList.remove('hidden');
                applyRolePermissions();
            } else {
                loginScreen.classList.remove('hidden');
                mainApp.classList.add('hidden');
                populateLoginModeratorSelect();
            }
        }

        function togglePasswordVisibility() {
            const pwdInput = document.getElementById('login-password');
            const icon = document.getElementById('password-toggle-icon');
            if (pwdInput.type === 'password') {
                pwdInput.type = 'text';
                icon.className = 'fa-solid fa-eye-slash text-sm text-indigo-400';
            } else {
                pwdInput.type = 'password';
                icon.className = 'fa-solid fa-eye text-sm text-slate-400';
            }
        }

        function handleLoginSubmit(e) {
            e.preventDefault();
            const passInput = document.getElementById('login-password').value;
            const rememberMe = document.getElementById('login-remember-me').checked;
            const errorBanner = document.getElementById('login-error-banner');
            const errorText = document.getElementById('login-error-text');
            const submitBtn = document.getElementById('btn-login-submit');

            if (currentLoginRole === 'admin') {
                const userInput = document.getElementById('login-username').value.trim();
                const validUsers = [AUTH_CONFIG.username.toLowerCase(), 'manik'];
                if (validUsers.includes(userInput.toLowerCase()) && passInput === AUTH_CONFIG.getPassword()) {
                    errorBanner.classList.add('hidden');
                    currentUserRole = 'admin';
                    currentLoggedInModSl = null;
                    localStorage.setItem('sanvees_user_role', 'admin');
                    localStorage.removeItem('sanvees_logged_in_mod_sl');

                    if (rememberMe) localStorage.setItem(AUTH_CONFIG.storageKey, "AUTHENTICATED");
                    else sessionStorage.setItem(AUTH_CONFIG.storageKey, "AUTHENTICATED");

                    submitBtn.innerHTML = `<i class="fa-solid fa-circle-check text-base"></i> <span>Access Granted...</span>`;
                    submitBtn.className = "w-full mt-4 py-3.5 rounded-2xl bg-emerald-600 text-white font-display font-bold text-sm tracking-wide shadow-glow-emerald";

                    setTimeout(() => {
                        checkAuthStatus();
                        applyRolePermissions();
                        renderDailyTable();
                        if (activeView === 'monthly') renderMonthlyTable();
                        showToast("Welcome! Access Granted to In-Charge Portal", "success");
                        submitBtn.innerHTML = `<i class="fa-solid fa-right-to-bracket text-base"></i> <span>Unlock Dashboard</span>`;
                        submitBtn.className = "w-full mt-4 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:from-indigo-500 hover:to-violet-500 text-white font-display font-black text-sm tracking-wide shadow-glow-brand transition flex items-center justify-center gap-2 cursor-pointer btn-shimmer";
                    }, 350);
                } else {
                    errorBanner.classList.remove('hidden');
                    errorText.innerText = "Incorrect admin password. Please try again.";
                    const pwdInput = document.getElementById('login-password');
                    pwdInput.value = '';
                    pwdInput.focus();
                }
            } else {
                // Moderator Login
                const modSl = parseInt(document.getElementById('login-mod-select').value, 10);
                const mod = moderators.find(m => m.sl === modSl);
                if (!mod) {
                    errorBanner.classList.remove('hidden');
                    errorText.innerText = "Please select a valid moderator.";
                    return;
                }

                // Accept '1234' or last 4 digits of phone or admin password
                const modPin = passInput.trim();
                const validModPins = ['1234', mod.phone.slice(-4), AUTH_CONFIG.getPassword()];
                
                if (validModPins.includes(modPin) || modPin === '1234') {
                    errorBanner.classList.add('hidden');
                    currentUserRole = 'moderator';
                    currentLoggedInModSl = mod.sl;
                    localStorage.setItem('sanvees_user_role', 'moderator');
                    localStorage.setItem('sanvees_logged_in_mod_sl', String(mod.sl));

                    if (rememberMe) localStorage.setItem(AUTH_CONFIG.storageKey, "MODERATOR_AUTHENTICATED");
                    else sessionStorage.setItem(AUTH_CONFIG.storageKey, "MODERATOR_AUTHENTICATED");

                    submitBtn.innerHTML = `<i class="fa-solid fa-circle-check text-base"></i> <span>Welcome ${mod.name}...</span>`;
                    submitBtn.className = "w-full mt-4 py-3.5 rounded-2xl bg-emerald-600 text-white font-display font-bold text-sm tracking-wide shadow-glow-emerald";

                    setTimeout(() => {
                        checkAuthStatus();
                        applyRolePermissions();
                        renderDailyTable();
                        if (activeView === 'monthly') renderMonthlyTable();
                        showToast(`👋 Welcome ${mod.name}! (View-Only Portal)`, "success");
                        submitBtn.innerHTML = `<i class="fa-solid fa-right-to-bracket text-base"></i> <span>Open Moderator Portal</span>`;
                        submitBtn.className = "w-full mt-4 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-display font-black text-sm tracking-wide shadow-glow-brand transition flex items-center justify-center gap-2 cursor-pointer btn-shimmer";
                    }, 350);
                } else {
                    errorBanner.classList.remove('hidden');
                    errorText.innerText = "Incorrect PIN. Default moderator PIN is 1234.";
                    const pwdInput = document.getElementById('login-password');
                    pwdInput.value = '';
                    pwdInput.focus();
                }
            }
        }

        function handleLogout() {
            if (confirm("Log out from Sanvee's by Tony Portal?")) {
                localStorage.removeItem(AUTH_CONFIG.storageKey);
                sessionStorage.removeItem(AUTH_CONFIG.storageKey);
                localStorage.removeItem('sanvees_user_role');
                localStorage.removeItem('sanvees_logged_in_mod_sl');
                sessionStorage.removeItem('sanvees_user_role');
                sessionStorage.removeItem('sanvees_logged_in_mod_sl');
                currentUserRole = 'admin';
                currentLoggedInModSl = null;
                document.getElementById('login-password').value = '';
                checkAuthStatus();
                showToast("Logged out securely.", "info");
            }
        }

        function openChangePasswordModal() {
            if (currentUserRole === 'moderator') {
                showToast('Password management is restricted to In-Charge Admin.', 'info');
                return;
            }
            document.getElementById('cp-current-pass').value = '';
            document.getElementById('cp-new-pass').value = '';
            document.getElementById('cp-confirm-pass').value = '';
            document.getElementById('change-pwd-error-banner').classList.add('hidden');
            document.getElementById('change-password-modal').classList.remove('hidden');
        }

        function closeChangePasswordModal() {
            document.getElementById('change-password-modal').classList.add('hidden');
        }

        function handleChangePasswordSubmit(e) {
            e.preventDefault();
            const curPass = document.getElementById('cp-current-pass').value;
            const newPass = document.getElementById('cp-new-pass').value;
            const confirmPass = document.getElementById('cp-confirm-pass').value;
            const errorBanner = document.getElementById('change-pwd-error-banner');
            const errorText = document.getElementById('change-pwd-error-text');

            if (curPass !== AUTH_CONFIG.getPassword()) {
                errorBanner.classList.remove('hidden');
                errorText.innerText = "Current password is incorrect.";
                return;
            }
            if (!newPass || newPass.trim().length < 4) {
                errorBanner.classList.remove('hidden');
                errorText.innerText = "New password must be at least 4 characters.";
                return;
            }
            if (newPass !== confirmPass) {
                errorBanner.classList.remove('hidden');
                errorText.innerText = "Passwords do not match.";
                return;
            }

            AUTH_CONFIG.setPassword(newPass);
            errorBanner.classList.add('hidden');
            closeChangePasswordModal();
            showToast("Password updated successfully!", "success");
        }

        function handleResetPasswordDefault() {
            if (confirm("Reset password to default (@Manik1243)?")) {
                AUTH_CONFIG.resetDefaultPassword();
                closeChangePasswordModal();
                showToast("Password reset to default", "info");
            }
        }

        // ======================= THEME, CLOCK & UTILITIES =======================
        function initTheme() {
            let saved = localStorage.getItem('sanvees_theme_v3');
            if (!saved) {
                // Executive Dark Mode by default for maximum luxury contrast
                saved = 'dark';
                localStorage.setItem('sanvees_theme_v3', 'dark');
                localStorage.setItem('sanvees_theme', 'dark');
            }
            if (saved === 'dark') {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                const icon = document.getElementById('theme-icon');
                if (icon) icon.className = 'fa-solid fa-sun text-amber-400 text-sm';
            } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                const icon = document.getElementById('theme-icon');
                if (icon) icon.className = 'fa-solid fa-moon text-slate-700 text-sm';
            }
        }

        function toggleTheme() {
            const isDark = document.documentElement.classList.toggle('dark');
            if (isDark) {
                document.documentElement.classList.remove('light');
            } else {
                document.documentElement.classList.add('light');
            }
            const mode = isDark ? 'dark' : 'light';
            localStorage.setItem('sanvees_theme_v3', mode);
            localStorage.setItem('sanvees_theme', mode);
            const icon = document.getElementById('theme-icon');
            if (icon) icon.className = isDark ? 'fa-solid fa-sun text-amber-400 text-sm' : 'fa-solid fa-moon text-slate-700 text-sm';
        }

        function startLiveClock() {
            const clockEl = document.getElementById('nav-live-clock');
            const updateClock = () => {
                const now = new Date();
                if (clockEl) clockEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            };
            updateClock();
            setInterval(updateClock, 1000);
        }

        function toggleOperationsMenu(forcedState) {
            const menu = document.getElementById('operations-dropdown-menu');
            if (!menu) return;
            const isHidden = menu.classList.contains('hidden');
            const show = forcedState !== undefined ? forcedState : isHidden;
            if (show) toggleAdminMenu(false);
            if (show) menu.classList.remove('hidden');
            else menu.classList.add('hidden');
        }

        function toggleAdminMenu(forcedState) {
            const menu = document.getElementById('admin-dropdown-menu');
            if (!menu) return;
            const isHidden = menu.classList.contains('hidden');
            const show = forcedState !== undefined ? forcedState : isHidden;
            if (show) toggleOperationsMenu(false);
            if (show) menu.classList.remove('hidden');
            else menu.classList.add('hidden');
        }

        document.addEventListener('click', (e) => {
            const opsMenu = document.getElementById('operations-dropdown-menu');
            const opsBtn = document.getElementById('btn-operations-hub');
            if (opsMenu && !opsMenu.classList.contains('hidden') && !opsMenu.contains(e.target) && !opsBtn?.contains(e.target)) {
                opsMenu.classList.add('hidden');
            }

            const adminMenu = document.getElementById('admin-dropdown-menu');
            const adminBtn = document.getElementById('btn-admin-menu');
            if (adminMenu && !adminMenu.classList.contains('hidden') && !adminMenu.contains(e.target) && !adminBtn?.contains(e.target)) {
                adminMenu.classList.add('hidden');
            }
        });

        function showToast(message, type = 'success') {
            const container = document.getElementById('toast-container');
            if (!container) return;
            const toast = document.createElement('div');
            toast.className = 'pointer-events-auto relative overflow-hidden flex items-center gap-3 px-4 py-3 rounded-2xl glass-panel-elevated shadow-2xl text-xs font-bold border border-white/20 transform transition-all duration-300 animate-modal-pop';
            
            let icon = '<i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i>';
            if (type === 'info') icon = '<i class="fa-solid fa-circle-info text-indigo-500 text-sm"></i>';
            else if (type === 'warning') icon = '<i class="fa-solid fa-triangle-exclamation text-amber-500 text-sm"></i>';
            else if (type === 'error') icon = '<i class="fa-solid fa-circle-xmark text-rose-500 text-sm"></i>';

            toast.innerHTML = `
                ${icon}
                <span class="text-slate-900 dark:text-white font-medium">${message}</span>
                <button type="button" onclick="this.parentElement.remove()" class="ml-auto text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
                    <i class="fa-solid fa-xmark text-xs"></i>
                </button>
                <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 toast-progress-bar"></div>
            `;
            container.appendChild(toast);
            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => toast.remove(), 250);
            }, 2800);
        }

        function getInitials(name) {
            if (!name) return "M";
            const parts = name.trim().split(" ");
            return parts.length === 1 ? parts[0].substring(0, 2).toUpperCase() : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }

        function exportToCSV() {
            let csv = "SL,Name,Weekend Off,Phone,Joining Date,Service Tenure,Status\n";
            moderators.forEach((m, idx) => {
                const status = getModeratorStatusForDate(m, currentActiveDate);
                const tenure = calculateTenure(m.join, currentActiveDate);
                csv += `${m.sl},"${m.name}","${m.weekend}","${m.phone}","${m.join}","${tenure}","${status}"\n`;
            });
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", `Sanvees_Moderators_Roster_${currentActiveDate}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast("Exported Roster to CSV!", "success");
        }

        function updatePrintBannerDetails() {
            const dayName = getDayNameForDate(currentActiveDate);
            const subtitleEl = document.getElementById('print-header-subtitle');
            const dateEl = document.getElementById('print-header-date');
            const totalEl = document.getElementById('print-header-total');

            if (activeView === 'daily') {
                if (subtitleEl) subtitleEl.innerText = 'All Moderator Duty Roster';
                if (dateEl) dateEl.innerText = `Date: ${currentActiveDate} (${dayName})`;
                if (totalEl) totalEl.innerText = `Total Staff: ${moderators.length} Members`;
            } else {
                const [yearStr, monthStr] = currentActiveMonth.split('-');
                const month = parseInt(monthStr, 10);
                const monthName = MONTH_NAMES[month - 1] || 'Month';
                if (subtitleEl) subtitleEl.innerText = `Monthly Attendance Matrix (${monthName} ${yearStr})`;
                if (dateEl) dateEl.innerText = `Month: ${monthName} ${yearStr}`;
                if (totalEl) totalEl.innerText = `Total Staff: ${moderators.length} Members`;
            }
        }

        function applyPrintOrientationSettings() {
            let printStyle = document.getElementById('dynamic-print-orientation-style');
            if (!printStyle) {
                printStyle = document.createElement('style');
                printStyle.id = 'dynamic-print-orientation-style';
                document.head.appendChild(printStyle);
            }

            if (activeView === 'appointment' || document.body.classList.contains('print-appointment-active')) {
                printStyle.innerHTML = `
                    @page { size: A4 portrait; margin: 0; }
                    @media print {
                        @page { size: A4 portrait; margin: 0; }
                        html, body { margin: 0 !important; padding: 0 !important; width: 210mm !important; height: 297mm !important; }
                    }
                `;
            } else if (activeView === 'daily') {
                printStyle.innerHTML = `
                    @page { size: A4 portrait; margin: 8mm 6mm; }
                    @media print {
                        @page { size: A4 portrait; margin: 8mm 6mm; }
                        #print-header-banner { padding: 10px 16px !important; margin-bottom: 5mm !important; }
                        #print-header-banner h1 { font-size: 20pt !important; }
                        #print-header-subtitle { font-size: 12pt !important; }
                    }
                `;
            } else {
                printStyle.innerHTML = `
                    @page { size: landscape; margin: 4mm 4mm; }
                    @media print {
                        @page { size: landscape; margin: 4mm 4mm; }
                        #print-header-banner { padding: 4px 10px !important; margin-bottom: 2mm !important; border-width: 1.5px !important; }
                        #print-header-banner h1 { font-size: 13pt !important; line-height: 1.1 !important; margin: 0 !important; }
                        #print-header-subtitle { font-size: 8.5pt !important; margin-top: 1px !important; }
                        #print-header-banner div:last-child { font-size: 7pt !important; margin-top: 2px !important; padding-top: 2px !important; }
                    }
                `;
            }
        }

        function handlePrintReport() {
            if (currentUserRole === 'moderator') {
                showToast('Printing is restricted to In-Charge Admin.', 'info');
                return;
            }
            updatePrintBannerDetails();
            applyPrintOrientationSettings();
            window.print();
        }

        window.addEventListener('beforeprint', () => {
            if (currentUserRole === 'moderator') return;
            updatePrintBannerDetails();
            applyPrintOrientationSettings();
        });

        // ======================= EXECUTIVE COMMAND PALETTE & QUICK ACTIONS =======================
        let paletteSelectedIndex = 0;
        let paletteCurrentItems = [];

        function openCommandPalette() {
            const backdrop = document.getElementById('command-palette-backdrop');
            const input = document.getElementById('palette-search-input');
            if (backdrop && input) {
                backdrop.classList.remove('hidden');
                input.value = '';
                paletteSelectedIndex = 0;
                handlePaletteInput('');
                setTimeout(() => input.focus(), 50);
            }
        }

        function closeCommandPalette() {
            const backdrop = document.getElementById('command-palette-backdrop');
            if (backdrop) backdrop.classList.add('hidden');
        }

        function handlePaletteInput(query) {
            const container = document.getElementById('palette-results-list');
            if (!container) return;
            const q = (query || '').trim().toLowerCase();

            const actionCommands = [
                { id: 'act-daily', title: 'Daily Roster View', subtitle: 'View and mark daily attendance roster', icon: 'fa-calendar-day', color: 'text-indigo-500', action: () => { switchView('daily'); closeCommandPalette(); } },
                { id: 'act-monthly', title: 'Monthly Matrix Sheet', subtitle: 'View full monthly 30/31-day matrix sheet', icon: 'fa-table-cells', color: 'text-purple-500', action: () => { switchView('monthly'); closeCommandPalette(); } },
                { id: 'act-appointment', title: 'Appointment Letter Generator', subtitle: 'Create & print appointment letter on official company pad', icon: 'fa-file-signature', color: 'text-amber-500', action: () => { switchView('appointment'); closeCommandPalette(); } },
                { id: 'act-today', title: 'Jump to Today', subtitle: 'Set active date to current calendar day', icon: 'fa-clock-rotate-left', color: 'text-cyan-500', action: () => { jumpToToday(); closeCommandPalette(); } },
                { id: 'act-bulk-present', title: 'Mark All On-Duty Present', subtitle: 'One-click bulk mark for all scheduled moderators', icon: 'fa-bolt', color: 'text-emerald-500', action: () => { bulkMarkAllPresent(); closeCommandPalette(); } },
                { id: 'act-add', title: 'Add New Moderator', subtitle: 'Register moderator profile into serialized roster', icon: 'fa-user-plus', color: 'text-indigo-500', action: () => { openAddModal(); closeCommandPalette(); } },
                { id: 'act-night', title: 'Night Shifts Roster', subtitle: 'Manage night duty schedules and rotation', icon: 'fa-moon', color: 'text-indigo-500', action: () => { openNightShiftModal(); closeCommandPalette(); } },
                { id: 'act-leaves', title: 'Approved Leaves', subtitle: 'Schedule official staff leaves and exemptions', icon: 'fa-calendar-check', color: 'text-purple-500', action: () => { openLeaveModal(); closeCommandPalette(); } },
                { id: 'act-exchange', title: 'Weekend Exchanges', subtitle: 'Record and schedule mutual weekend swaps', icon: 'fa-repeat', color: 'text-cyan-500', action: () => { openExchangeModal(); closeCommandPalette(); } },
                { id: 'act-absent', title: 'Absent Alerts & WhatsApp', subtitle: 'Send absent notices to moderators on WhatsApp', icon: 'fa-user-xmark', color: 'text-rose-500', action: () => { openUnexcusedModal(); closeCommandPalette(); } },
                { id: 'act-firebase', title: 'Firebase Cloud Database Settings', subtitle: 'Check cloud sync status or configure database URL', icon: 'fa-fire', color: 'text-amber-500', action: () => { openFirebaseModal(); closeCommandPalette(); } },
                { id: 'act-csv', title: 'Export Roster to Excel/CSV', subtitle: 'Download complete roster dataset as CSV', icon: 'fa-file-csv', color: 'text-emerald-500', action: () => { exportToCSV(); closeCommandPalette(); } },
                { id: 'act-print', title: 'Print Formal A4 Duty Roster', subtitle: 'Print optimized office copy (Portrait or Landscape)', icon: 'fa-print', color: 'text-slate-600 dark:text-slate-300', action: () => { handlePrintReport(); closeCommandPalette(); } },
                { id: 'act-theme', title: 'Toggle Dark / Light Theme', subtitle: 'Switch between Obsidian Dark and Porcelain Light', icon: 'fa-circle-half-stroke', color: 'text-amber-500', action: () => { toggleTheme(); closeCommandPalette(); } },
                { id: 'act-logout', title: 'Log Out of Portal', subtitle: 'End session and return to luxury lock screen', icon: 'fa-arrow-right-from-bracket', color: 'text-rose-500', action: () => { closeCommandPalette(); handleLogout(); } }
            ];

            const matchingActions = actionCommands.filter(a => a.title.toLowerCase().includes(q) || a.subtitle.toLowerCase().includes(q));

            const matchingMods = moderators.filter(m => 
                m.name.toLowerCase().includes(q) || 
                m.phone.includes(q) || 
                m.weekend.toLowerCase().includes(q) ||
                String(m.sl).includes(q)
            ).map(m => ({
                id: `mod-${m.sl}`,
                title: `${String(m.sl).padStart(2, '0')} - ${m.name}`,
                subtitle: `${m.weekend} Off • ${m.phone} • Joined ${m.join}`,
                icon: 'fa-user',
                color: 'text-indigo-600 dark:text-indigo-400',
                action: () => {
                    viewModeratorMonthly(m.sl);
                    closeCommandPalette();
                }
            }));

            paletteCurrentItems = [...matchingActions, ...matchingMods];
            if (paletteSelectedIndex >= paletteCurrentItems.length) paletteSelectedIndex = 0;

            if (paletteCurrentItems.length === 0) {
                container.innerHTML = `
                    <div class="p-6 text-center text-slate-400">
                        <i class="fa-solid fa-magnifying-glass text-2xl mb-2 text-slate-300 dark:text-slate-600"></i>
                        <p class="font-bold text-xs">No matching moderators or commands</p>
                    </div>
                `;
                return;
            }

            let html = '';
            paletteCurrentItems.forEach((item, idx) => {
                const isSelected = idx === paletteSelectedIndex;
                html += `
                    <div onclick="executePaletteItem(${idx})" 
                         class="flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition ${isSelected ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'}">
                        <div class="flex items-center gap-3 min-w-0">
                            <div class="w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/70 dark:bg-slate-700/70 ' + item.color} flex-shrink-0">
                                <i class="fa-solid ${item.icon} text-xs"></i>
                            </div>
                            <div class="min-w-0">
                                <div class="font-bold text-xs truncate ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}">${item.title}</div>
                                <div class="text-[10px] truncate ${isSelected ? 'text-indigo-100' : 'text-slate-400'}">${item.subtitle}</div>
                            </div>
                        </div>
                        <i class="fa-solid fa-chevron-right text-[10px] ${isSelected ? 'text-white' : 'text-slate-300 dark:text-slate-600'}"></i>
                    </div>
                `;
            });
            container.innerHTML = html;
        }

        function handlePaletteKeydown(e) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (paletteCurrentItems.length > 0) {
                    paletteSelectedIndex = (paletteSelectedIndex + 1) % paletteCurrentItems.length;
                    handlePaletteInput(document.getElementById('palette-search-input').value);
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (paletteCurrentItems.length > 0) {
                    paletteSelectedIndex = (paletteSelectedIndex - 1 + paletteCurrentItems.length) % paletteCurrentItems.length;
                    handlePaletteInput(document.getElementById('palette-search-input').value);
                }
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (paletteCurrentItems[paletteSelectedIndex]) {
                    paletteCurrentItems[paletteSelectedIndex].action();
                }
            } else if (e.key === 'Escape') {
                closeCommandPalette();
            }
        }

        function executePaletteItem(index) {
            if (paletteCurrentItems[index]) {
                paletteCurrentItems[index].action();
            }
        }

        function quickFillLogin(role) {
            if (role === 'admin') {
                switchLoginRole('admin');
                document.getElementById('login-username').value = 'admin';
                document.getElementById('login-password').value = '@Manik1243';
                showToast("⚡ Filled In-Charge Admin credentials", "info");
            } else {
                switchLoginRole('moderator');
                const select = document.getElementById('login-mod-select');
                if (select && select.options.length > 0) select.selectedIndex = 0;
                document.getElementById('login-password').value = '1234';
                showToast("👤 Filled Moderator View credentials (PIN: 1234)", "info");
            }
        }

        function initSpotlightCards() {
            document.querySelectorAll('.bento-card').forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });
        }

        // Global Keyboard Hotkeys
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
                e.preventDefault();
                openCommandPalette();
                return;
            }
            if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
                if (currentUserRole === 'moderator') {
                    e.preventDefault();
                    e.stopPropagation();
                    showToast('Printing is restricted to In-Charge Admin.', 'info');
                    return;
                }
            }
            if (e.key === 'Escape') {
                closeCommandPalette();
                closeStatusPicker();
                closeModal();
                closeNightShiftModal();
                closeNightShiftRequestModal();
                closeNightShiftWhatsAppBatchModal();
                closeLeaveModal();
                closeAbsentAlertModal();
                closeBulkUnexcusedModal();
                closeChangePasswordModal();
                closeFirebaseModal();
            }
            if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'SELECT') {
                e.preventDefault();
                openCommandPalette();
            }
        });

        // Initialize on DOM Ready
        function initApp() {
            initTheme();
            startLiveClock();
            loadFromLocalStorage();
            initFirebaseConnection(false);
            updateDateUI();
            const monthPicker = document.getElementById('selected-month-picker');
            if (monthPicker) monthPicker.value = currentActiveMonth;
            populateLoginModeratorSelect();
            checkAuthStatus();
            applyRolePermissions();
            applyPrintOrientationSettings();
            if (activeView === 'monthly') {
                switchView('monthly');
            } else if (activeView === 'appointment') {
                switchView('appointment');
            } else {
                switchView('daily');
            }
            renderNightShiftRequestsList();
            initSpotlightCards();
        }

        window.addEventListener('DOMContentLoaded', initApp);