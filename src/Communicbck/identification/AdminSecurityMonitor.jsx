import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, UserCheck, UserX, ArrowLeft, Download, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, CheckCircle, AlertCircle } from "lucide-react";
import { colors } from "../../Styles/colors"; // Adapter si ton fichier de couleurs est ailleurs
import axios from "axios";

const BASE_URL = import.meta.env.VITE_b;

// Loader
const LoaderOverlay = styled.div`
  position: fixed; inset: 0; background: #fff8;
  display: flex; align-items: center; justify-content: center; z-index: 9999;
`;
const Spinner = styled.div`
  width: 56px; height: 56px; border: 7px solid ${colors.danger}33;
  border-top: 7px solid ${colors.blueMid};
  border-radius: 20%; animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`;

const Container = styled(motion.div)`
  max-width: 1340px; margin: 0px auto 60px auto;
  background: ${colors.white};
  padding: 2.1rem 2rem 2rem 2rem;
  box-shadow: 0 10px 48px 0 ${colors.bgDark}22;
`;

const BackBtn = styled.button`
  display: flex; align-items: center; gap: 7px;
  background: none; color: ${colors.danger}83;
  border: none; font-size: 1.1em; font-weight: 700;
  margin-bottom: 1.7rem; cursor: pointer; transition: color 0.15s;
  &:hover { color: ${colors.blueMid}; }
`;

const Badge = styled.span`
  display: inline-block; padding: 3.5px 11px; border-radius: 11px;
  font-size: 0.97em; font-weight: 700;
  background: ${({ ok }) => (ok ? colors.success : colors.danger)};
  color: #fff; margin-right: 5px; letter-spacing: 0.01em;
`;

const DangerButton = styled(motion.button)`
  background: ${colors.danger}; color: ${colors.white};
  border: none; border-radius: 5px; font-weight: 600;
  padding: 6px 16px; margin-left: 3px; cursor: pointer;
  display: flex; align-items: center; gap: 7px; font-size: 1em;
  transition: background 0.16s;
  &:hover { background: #c30010; }
  svg { margin-right: 2px; }
`;

const ToggleBtn = styled(motion.button)`
  background: ${({ active }) => (active ? "#cbd5e1" : colors.success)};
  color: ${({ active }) => (active ? "#444" : "#fff")};
  border: none; border-radius: 5px; font-weight: 700;
  padding: 6px 18px; margin-left: 4px; cursor: pointer;
  display: flex; align-items: center; gap: 6px; font-size: 1em;
  box-shadow: 0 1px 8px #6ee7b709;
  transition: background 0.17s, color 0.17s;
  &:hover {
    background: ${({ active }) => (active ? colors.danger : colors.blueMid)};
    color: #fff;
  }
  svg { margin-right: 2px; }
`;

// Snackbar
const SnackbarWrap = styled.div`
  position: fixed; right: 30px; bottom: 30px; z-index: 9999;
  display: flex; flex-direction: column; align-items: flex-end;
`;
const Snackbar = styled.div`
  background: ${({ error }) => (error ? colors.danger : colors.success)};
  color: #fff; min-width: 230px; border-radius: 10px;
  padding: 16px 24px 16px 18px; margin-top: 15px; box-shadow: 0 4px 22px #2222;
  font-weight: 600; font-size: 1.04em; display: flex; align-items: center; gap: 10px;
  animation: fadeInSnack 0.4s;
  @keyframes fadeInSnack { from { opacity: 0; bottom: 0px; } to { opacity: 1; bottom: 30px; } }
`;
function SnackbarFeedback({ open, message, error = false, onClose }) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => onClose(), 4000);
      return () => clearTimeout(timer);
    }
  }, [open]);
  if (!open) return null;
  return (
    <SnackbarWrap>
      <Snackbar error={error}>
        {error ? <AlertCircle size={22} /> : <CheckCircle size={22} />}
        {message}
      </Snackbar>
    </SnackbarWrap>
  );
}

// Table abstrait
const SectionHeader = styled.div`
  display: flex; align-items: center; gap: 11px; margin-bottom: 0.4rem;
  margin-top: 2.2rem;
`;
const CollapseBtn = styled.button`
  background: none; border: none; outline: none;
  display: flex; align-items: center; justify-content: center;
  padding: 3px 4px; cursor: pointer;
  color: ${colors.blueMid}; border-radius: 50%;
  font-size: 1.5em; transition: background 0.13s;
  &:hover { background: ${colors.bgSecondary}13; }
`;
const Title = styled(motion.h2)`
  font-size: 1.23rem; color: ${colors.bgDark};
  font-weight: 800; letter-spacing: 0.01em; margin: 0;
`;
const TableWrap = styled.div`
  overflow-x: auto; border-radius: 10px; margin-bottom: 1.2rem;
`;
const PaginationWrap = styled.div`
  display: flex; align-items: center; gap: 8px;
  justify-content: flex-end; margin-top: 0.5rem; margin-bottom: 0.6rem;
`;
const PageBtn = styled.button`
  background: ${colors.bgSecondary}15; color: ${colors.bgDark};
  border: none; border-radius: 6px; padding: 6px 12px; cursor: pointer;
  font-weight: 600; font-size: 1em; transition: background 0.14s;
  display: flex; align-items: center; gap: 3px;
  &:disabled { background: #eee; color: #aaa; cursor: not-allowed; }
  &:hover:not(:disabled) { background: ${colors.blueMid}30; }
`;
const Table = styled(motion.table)`
  width: 100%; border-collapse: separate; border-spacing: 0; font-size: 1rem;
  th, td {
    border-bottom: 1.5px solid #eef2f7;
    padding: 0.88rem 0.65rem;
    background: ${colors.white}FA; text-align: left;
  }
  th {
    background: ${colors.bgSecondary}08;
    font-weight: 700; color: ${colors.bgDark}; position: sticky; top: 0; z-index: 1;
  }
  tr:last-child td { border-bottom: none; }
  td {
    font-weight: 500; color: ${colors.bgDark}; vertical-align: middle;
  }
`;
const FilterInput = styled.input`
  padding: 7px 12px; border: 1.5px solid ${colors.blueMid}55;
  border-radius: 7px; margin-right: 13px; font-size: 1.02em; width: 220px;
  margin-bottom: 12px; background: ${colors.white}EC;
  box-shadow: 0 2px 8px ${colors.bgSecondary}0A; transition: border 0.18s;
  &:focus {
    outline: none; border: 1.8px solid ${colors.accent};
    background: ${colors.bgSecondary}08;
  }
`;
const ExportBtn = styled(motion.button)`
  background: linear-gradient(92deg, ${colors.blueMid} 40%, ${colors.bgSecondary} 100%);
  color: ${colors.white}; border: none; font-weight: 700; border-radius: 6px;
  padding: 7px 18px 7px 38px; margin-bottom: 12px; margin-right: 13px;
  cursor: pointer; font-size: 1em; position: relative;
  box-shadow: 0 3px 10px ${colors.bgSecondary}16;
  transition: background 0.18s, color 0.18s, box-shadow 0.16s;
  svg {
    position: absolute; left: 13px; top: 8px; width: 19px; height: 19px;
  }
  &:hover {
    background: linear-gradient(88deg, ${colors.bgSecondary} 45%, ${colors.blueMid} 100%);
    color: ${colors.bgDark};
    box-shadow: 0 5px 22px ${colors.bgSecondary}22;
  }
`;

// Export CSV
function exportToCSV(data, columns, fileName) {
  if (!data.length) return;
  const separator = ",";
  const header = columns.map((col) => `"${col.label}"`).join(separator);
  const csv = data.map((row) =>
    columns
      .map((col) => {
        const keys = col.key.split(".");
        let value = row;
        for (const k of keys) value = value?.[k];
        return `"${String(value ?? "").replace(/"/g, '""')}"`;
      })
      .join(separator)
  );
  const csvContent = [header, ...csv].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName || "export.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Table abstrait
function SectionTable({
  title,
  columns,
  tableData,
  filterValue,
  onFilter,
  actions,
  loading = false,
  hideFilter = false,
  csvName = "export.csv",
  collapsedByDefault = false,
  getRowKey = (row) => row._id || Math.random(),
  perPage = 5,
  selectable = false,
  selectedRows = [],
  onSelectRow = () => {},
  onSelectAll = () => {},
  deleteSelectedRows = () => {},
}) {
  const [show, setShow] = useState(!collapsedByDefault);
  const [page, setPage] = useState(1);
  const maxPage = Math.ceil(tableData.length / perPage) || 1;
  const slice = tableData.slice((page - 1) * perPage, page * perPage);
  const goToPrev = () => setPage((p) => Math.max(1, p - 1));
  const goToNext = () => setPage((p) => Math.min(maxPage, p + 1));
  React.useEffect(() => setPage(1), [tableData.length]);

  const sectionAnim = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 28 },
    transition: { duration: 0.38 }
  };

  return (
    <>
      <SectionHeader>
        <CollapseBtn onClick={() => setShow((v) => !v)} title={show ? "Réduire" : "Dérouler"}>
          {show ? <ChevronUp /> : <ChevronDown />}
        </CollapseBtn>
        <Title>{title}</Title>
      </SectionHeader>
      <AnimatePresence>
        {show && (
          <motion.section {...sectionAnim} key={title + "sect"}>
            {!hideFilter && (
              <FilterInput
                placeholder="Recherche email..."
                value={filterValue}
                onChange={(e) => onFilter(e.target.value)}
              />
            )}
            {selectable && selectedRows.length > 0 && (
              <DangerButton onClick={deleteSelectedRows} style={{marginBottom: 14}}>
                <Trash2 size={18}/> Supprimer la sélection
              </DangerButton>
            )}
            <ExportBtn whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}
              onClick={() => exportToCSV(slice, columns, csvName)}
            ><Download /> Exporter CSV</ExportBtn>
            <TableWrap>
              <Table>
                <thead>
                  <tr>
                    {selectable && (
                      <th>
                        <input
                          type="checkbox"
                          onChange={e => onSelectAll(e.target.checked)}
                          checked={selectedRows.length > 0 && selectedRows.length === tableData.length}
                          ref={el => {
                            if (el) {
                              el.indeterminate =
                                selectedRows.length > 0 &&
                                selectedRows.length < tableData.length;
                            }
                          }}
                        />
                      </th>
                    )}
                    {columns.map(col => (
                      <th key={col.key}>{col.label}</th>
                    ))}
                    {actions && <th>Action</th>}
                  </tr>
                </thead>
                <tbody>
                  {slice.map((row) => (
                    <motion.tr key={getRowKey(row)} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      {selectable && (
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(row._id)}
                            onChange={() => onSelectRow(row._id)}
                          />
                        </td>
                      )}
                      {columns.map(col => (
                        <td key={col.key}>
                          {typeof col.render === "function" ? col.render(row) : col.key.split('.').reduce((acc, k) => acc?.[k], row) ?? "-"}
                        </td>
                      ))}
                      {actions && <td>{actions(row)}</td>}
                    </motion.tr>
                  ))}
                </tbody>
              </Table>
            </TableWrap>
            <PaginationWrap>
              <PageBtn onClick={goToPrev} disabled={page <= 1}><ChevronLeft /> Précédent</PageBtn>
              <span>Page {page} / {maxPage}</span>
              <PageBtn onClick={goToNext} disabled={page >= maxPage}>Suivant <ChevronRight /></PageBtn>
            </PaginationWrap>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

function formatDate(dt) {
  if (!dt) return "-";
  return new Date(dt).toLocaleString();
}

// ---------- PAGE PRINCIPALE ----------

export default function AdminSecurityMonitor() {
  const [loading, setLoading] = useState(true);
  const [connections, setConnections] = useState([]);
  const [disconnections, setDisconnections] = useState([]);
  const [blacklist, setBlacklist] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [users, setUsers] = useState([]);
  const [routeAudits, setRouteAudits] = useState([]);
  const [refresh, setRefresh] = useState(0);

  // Filters
  const [filterConn, setFilterConn] = useState("");
  const [filterDisc, setFilterDisc] = useState("");
  const [filterUser, setFilterUser] = useState("");
  const [filterRoute, setFilterRoute] = useState("");
  // Sélection pour audit log
  const [selectedAuditIds, setSelectedAuditIds] = useState([]);

  // Snackbar
  const [snack, setSnack] = useState({ open: false, message: "", error: false });
  const onDone = (msg, error = false) => setSnack({ open: true, message: msg, error });
  const closeSnack = () => setSnack(s => ({ ...s, open: false }));

  useEffect(() => {
    setLoading(true);
    Promise.all([
      axios.get(`${BASE_URL}/api/auth/admin/connections`, { withCredentials: true }).then(res => setConnections(res.data)),
      axios.get(`${BASE_URL}/api/auth/admin/disconnections`, { withCredentials: true }).then(res => setDisconnections(res.data)),
      axios.get(`${BASE_URL}/api/auth/admin/blacklisted-tokens`, { withCredentials: true }).then(res => setBlacklist(res.data)),
      axios.get(`${BASE_URL}/api/auth/admin/sessions`, { withCredentials: true }).then(res => setSessions(res.data)),
      axios.get(`${BASE_URL}/api/auth/admin/users`, { withCredentials: true }).then(res => setUsers(res.data)),
      axios.get(`${BASE_URL}/api/auth/admin/route-audit`, { withCredentials: true }).then(res => setRouteAudits(res.data)),
    ]).finally(() => setLoading(false));
  }, [refresh]);

  // ----- ACTIONS -----
  const deleteBlacklistToken = async (id) => {
    if (!window.confirm("Supprimer ce token blacklisté ?")) return;
    setLoading(true);
    try {
      await axios.delete(`${BASE_URL}/api/auth/admin/blacklisted-tokens/${id}`, { withCredentials: true });
      setRefresh(r => r + 1);
      onDone("Token supprimé !");
    } catch { onDone("Erreur suppression", true); }
    setLoading(false);
  };
  const deleteLog = async (id) => {
    if (!window.confirm("Supprimer ce log ?")) return;
    setLoading(true);
    try {
      await axios.delete(`${BASE_URL}/api/auth/admin/connection-logs/${id}`, { withCredentials: true });
      setRefresh(r => r + 1);
      onDone("Log supprimé !");
    } catch { onDone("Erreur suppression", true); }
    setLoading(false);
  };
  const toggleActive = async (userId, active) => {
    if (!window.confirm(`${active ? "Désactiver" : "Réactiver"} cet utilisateur ?`)) return;
    setLoading(true);
    try {
      await axios.put(`${BASE_URL}/api/auth/admin/users/${userId}/active`, { active: !active }, { withCredentials: true });
      setRefresh(r => r + 1);
      onDone(active ? "Utilisateur désactivé." : "Utilisateur activé.");
    } catch { onDone("Erreur changement d'état", true); }
    setLoading(false);
  };
  const deleteRouteAuditLog = async (id) => {
    if (!window.confirm("Supprimer ce log ?")) return;
    setLoading(true);
    try {
      await axios.delete(`${BASE_URL}/api/auth/admin/route-audit/${id}`, { withCredentials: true });
      setRefresh(r => r + 1);
      onDone("Audit supprimé !");
    } catch { onDone("Erreur suppression", true); }
    setLoading(false);
  };
  // Suppression groupée des audits sélectionnés
  const deleteSelectedAuditLogs = async () => {
    if (!selectedAuditIds.length) return;
    if (!window.confirm(`Supprimer ${selectedAuditIds.length} logs sélectionnés ?`)) return;
    setLoading(true);
    try {
      await axios.post(
        `${BASE_URL}/api/auth/admin/route-audit/bulk-delete`,
        { ids: selectedAuditIds },
        { withCredentials: true }
      );
      setRefresh(r => r + 1);
      setSelectedAuditIds([]);
      onDone("Logs supprimés !");
    } catch (err) {
      onDone("Erreur suppression groupée", true);
    }
    setLoading(false);
  };
  
  // page précédente
  const goBack = () => window.history.back();

  // ---- RENDER ----
  return (
    <Container initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <BackBtn onClick={goBack}><ArrowLeft /> Retour</BackBtn>
      {loading && (<LoaderOverlay><Spinner /></LoaderOverlay>)}
      <SnackbarFeedback {...snack} onClose={closeSnack} />

      {/* Connexions */}
      <SectionTable
        title="Connexions"
        columns={[
          { key: "userEmail", label: "Utilisateur" },
          { key: "ip", label: "IP" },
          { key: "userAgent", label: "Appareil", render: (r) => (r.userAgent || "-").slice(0, 40) },
          { key: "time", label: "Date/Heure", render: (r) => formatDate(r.time) }
        ]}
        tableData={connections.filter((log) => (log.userEmail || "").toLowerCase().includes(filterConn.toLowerCase()))}
        filterValue={filterConn}
        onFilter={setFilterConn}
        loading={loading}
        actions={(row) =>
          <DangerButton whileHover={{ scale: 1.05, background: "#be123c" }} onClick={() => deleteLog(row._id)}>
            <Trash2 size={16} /> Supprimer
          </DangerButton>
        }
        csvName="connexions.csv"
      />

      {/* Déconnexions */}
      <SectionTable
        title="Déconnexions"
        columns={[
          { key: "userEmail", label: "Utilisateur" },
          { key: "ip", label: "IP" },
          { key: "userAgent", label: "Appareil", render: (r) => (r.userAgent || "-").slice(0, 40) },
          { key: "time", label: "Date/Heure", render: (r) => formatDate(r.time) }
        ]}
        tableData={disconnections.filter((log) => (log.userEmail || "").toLowerCase().includes(filterDisc.toLowerCase()))}
        filterValue={filterDisc}
        onFilter={setFilterDisc}
        loading={loading}
        actions={(row) =>
          <DangerButton whileHover={{ scale: 1.05, background: "#be123c" }} onClick={() => deleteLog(row._id)}>
            <Trash2 size={16} /> Supprimer
          </DangerButton>
        }
        csvName="deconnexions.csv"
      />

      {/* Tokens blacklistés */}
      <SectionTable
        title="Tokens blacklistés"
        columns={[
          { key: "userEmail", label: "Email" },
          { key: "token", label: "Token (hash)", render: (r) => (r.token || "-").slice(0, 12) + "..." },
          { key: "createdAt", label: "Date ajout", render: (r) => formatDate(r.createdAt) }
        ]}
        tableData={blacklist}
        hideFilter
        loading={loading}
        actions={(row) =>
          <DangerButton whileHover={{ scale: 1.05, background: "#be123c" }} onClick={() => deleteBlacklistToken(row._id)}>
            <Trash2 size={16} /> Supprimer
          </DangerButton>
        }
        csvName="blacklist_tokens.csv"
      />

      {/* Utilisateurs */}
      <SectionTable
        title="Utilisateurs"
        columns={[
          { key: "email", label: "Email" },
          { key: "name", label: "Nom" },
          { key: "role", label: "Role" },
          { key: "active", label: "Actif ?", render: (u) => <Badge ok={u.active}>{u.active ? "Oui" : "Non"}</Badge> }
        ]}
        tableData={users.filter((u) => (u.email || "").toLowerCase().includes(filterUser.toLowerCase()))}
        filterValue={filterUser}
        onFilter={setFilterUser}
        loading={loading}
        actions={(u) =>
          <ToggleBtn active={!u.active} whileHover={{ scale: 1.05 }} onClick={() => toggleActive(u._id, u.active)}>
            {u.active ? <UserX size={17} /> : <UserCheck size={17} />}
            {u.active ? "Désactiver" : "Activer"}
          </ToggleBtn>
        }
      />

      {/* Sessions */}
      <SectionTable
        title="Sessions"
        columns={[
          { key: "userId.email", label: "Utilisateur" },
          { key: "token", label: "Token (hash)", render: (s) => (s.token || "").slice(0, 12) + "..." },
          { key: "connectedAt", label: "Connecté à", render: (s) => formatDate(s.connectedAt) },
          { key: "disconnectedAt", label: "Déconnecté à", render: (s) => s.disconnectedAt ? formatDate(s.disconnectedAt) : <Badge ok>Active</Badge> }
        ]}
        tableData={sessions}
        hideFilter
        loading={loading}
        csvName="sessions.csv"
      />

      {/* Audit des routes */}
      <SectionTable
        title="Audit des routes consultées"
        columns={[
          { key: "userEmail", label: "Utilisateur" },
          { key: "method", label: "Méthode" },
          { key: "route", label: "Route" },
          { key: "ip", label: "IP" },
          { key: "userAgent", label: "User Agent", render: (r) => (r.userAgent || "-").slice(0, 30) },
          { key: "timestamp", label: "Horodatage", render: (r) => formatDate(r.timestamp) }
        ]}
        tableData={routeAudits.filter((log) => (log.userEmail || "").toLowerCase().includes(filterRoute.toLowerCase()))}
        filterValue={filterRoute}
        onFilter={setFilterRoute}
        loading={loading}
        actions={(row) =>
          <DangerButton whileHover={{ scale: 1.05, background: "#be123c" }} onClick={() => deleteRouteAuditLog(row._id)}>
            <Trash2 size={16} /> Supprimer
          </DangerButton>
        }
        csvName="audit_routes.csv"
        selectable
        selectedRows={selectedAuditIds}
        onSelectRow={id => setSelectedAuditIds(prev => prev.includes(id) ? prev.filter(_id => _id !== id) : [...prev, id])}
        onSelectAll={checked => {
          if (checked) setSelectedAuditIds(routeAudits.map(l => l._id));
          else setSelectedAuditIds([]);
        }}
        deleteSelectedRows={deleteSelectedAuditLogs}
      />
    </Container>
  );
}
