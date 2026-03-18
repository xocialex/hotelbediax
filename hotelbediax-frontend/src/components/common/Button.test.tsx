import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders with text", () => {
    render(<Button>Guardar</Button>);
    expect(screen.getByText("Guardar")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);

    fireEvent.click(screen.getByText("Click"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies secondary variant styles", () => {
    render(<Button variant="secondary">Cancelar</Button>);
    const button = screen.getByText("Cancelar");
    expect(button.className).toContain("bg-gray-500");
  });
});
