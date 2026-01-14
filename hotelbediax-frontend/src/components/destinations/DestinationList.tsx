import type { Destination } from "../../types/destination";
import Button from "../common/Button";

interface Props {
  destinations: Destination[];
  onEdit: (d: Destination) => void;
  onDelete: (id: number) => void;
}

export default function DestinationTable({
  destinations,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-x-auto bg-white shadow rounded">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">País</th>
            <th className="px-4 py-2 border">Tipo</th>
            <th className="px-4 py-2 border">Descripción</th>
            <th className="px-4 py-2 border">Última modificación</th>
            <th className="px-4 py-2 border text-center">Acción</th>
          </tr>
        </thead>

        <tbody>
          {destinations.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center py-6 text-gray-500">
                No hay destinos
              </td>
            </tr>
          )}

          {destinations.map((d) => (
            <tr key={d.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border font-medium">{d.name}</td>
              <td className="px-4 py-2 border">{d.countryCode}</td>
              <td className="px-4 py-2 border">{d.type}</td>
              <td className="px-4 py-2 border text-sm">{d.description}</td>
              <td className="px-4 py-2 border text-xs text-gray-500">
                {new Date(d.lastModification).toLocaleString()}
              </td>
              <td className="px-4 py-2 border text-center space-x-2 flex justify-center">
                <Button icon="edit" type="button" onClick={() => onEdit(d)} variant="primary" />
                <Button icon="delete" type="button" onClick={() => onDelete(d.id)} variant="danger" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
