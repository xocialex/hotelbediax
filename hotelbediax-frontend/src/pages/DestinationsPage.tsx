import { useEffect, useState, useMemo } from "react";
import Layout from "../components/admin/Layout";
import type { Destination } from "../types/destination";
import {
  getDestinations,
  createDestination,
  updateDestination,
  deleteDestination
} from "../api/destinations.api";
import DestinationList from "../components/destinations/DestinationList";
import DestinationForm from "../components/destinations/DestinationForm";
import Pagination from "../components/common/Pagination";
import Button from "../components/common/Button";

export default function DestinationsPage() {
  const [allDestinations, setAllDestinations] = useState<Destination[]>([]);
  const [filter, setFilter] = useState("");
  const [editing, setEditing] = useState<Destination | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [page, setPage] = useState(1);
  const pageSize = 5;

  const loadData = async () => {
    const data = await getDestinations(filter);
    setAllDestinations(data);
    setPage(1); 
  };

useEffect(() => {
  const fetchData = async () => {
    const data = await getDestinations(filter);
    setAllDestinations(data);
    setPage(1);
  };

  fetchData();
}, [filter]);


const destinations = useMemo(() => {
  const start = (page - 1) * pageSize;
  return allDestinations.slice(start, start + pageSize);
}, [allDestinations, page, pageSize]);


  const handleSave = async (
    data: Omit<Destination, "id" | "lastModification">
  ) => {
    if (editing) {
      await updateDestination(editing.id, data);
    } else {
      await createDestination(data);
    }
    setEditing(null);
    setShowForm(false);
    loadData();
  };

  const handleDelete = async (id: number) => {
    await deleteDestination(id);
    loadData();
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Destinos Hotel Bedia X</h1>

        <Button type="button"  onClick={() => {
            setEditing(null);
            setShowForm(true);
          }} variant="primary"> Aregar Destino
        </Button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar destinos por NOMBRE..."
          className="w-full p-2 border border-gray-300 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <p className="text-sm text-gray-600 mt-4 font-semibold">
          {allDestinations.length} destinos
        </p>
      </div>

      {showForm && (
        <DestinationForm
          destination={editing || undefined}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}

      <DestinationList
        destinations={destinations}
        onEdit={(d) => {
          setEditing(d);
          setShowForm(true);
        }}
        onDelete={handleDelete}
      />

      <Pagination
        currentPage={page}
        pageSize={pageSize}
        totalItems={allDestinations.length}
        onPageChange={setPage}
      />
    </Layout>
  );
}
