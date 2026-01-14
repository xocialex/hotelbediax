import React, { useState } from "react";
import type { Destination, DestinationType } from "../../types/destination";
import Button from "../common/Button";

interface Props {
  destination?: Destination;
  onSave: (data: Omit<Destination, "id" | "lastModification">) => void;
  onCancel: () => void;
}

const types: DestinationType[] = ['Ciudad', 'Playa', 'Montaña', 'Cultural', 'Aventura'];

export default function DestinationForm({ destination, onSave, onCancel }: Props) {
  const [name, setName] = useState(destination?.name || "");
  const [description, setDescription] = useState(destination?.description || "");
  const [countryCode, setCountryCode] = useState(destination?.countryCode || "");
  const [type, setType] = useState<DestinationType>(destination?.type || "Ciudad");

   const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !description.trim() || !countryCode.trim()) {
      setShowError(true);
      return;
    }
    onSave({ name, description, countryCode, type });
  };

  return (
    <>
     {showError && (
        <div className="w-full mb-2 p-2 bg-red-100 text-red-600 rounded text-center">
          Faltan campos por llenar
        </div>
      )}
       <form onSubmit={handleSubmit} className="border p-4 rounded bg-white shadow-sm mb-4 block lg:flex gap-4 items-center justify-center">
      <input className="w-full border p-2 mb-2 rounded" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
      <input className="w-full border p-2 mb-2 rounded" placeholder="Codigo de pais" value={countryCode} onChange={e => setCountryCode(e.target.value.toUpperCase())} />
      <textarea className="w-full border p-2 mb-2 rounded" placeholder="Descripcion" value={description} onChange={e => setDescription(e.target.value)} />
      <select className="w-full border p-2 mb-2 rounded" value={type} onChange={e => setType(e.target.value as DestinationType)}>
        {types.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <div className="flex space-x-2">
        <Button type="submit" variant="success">Guardar</Button>
        <Button type="button" onClick={onCancel} variant="secondary">Cancelar</Button>
      </div>
    </form>
    </>
 
  );
}
