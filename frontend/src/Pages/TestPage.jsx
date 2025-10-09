import { FloatingDockDemo } from "@/components/SellerDock";
import { Global_Context } from "@/ContextAPI/GlobalContext";
import { useContext, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil, Trash2, Upload, X } from "lucide-react";

export function AddCar() {
  const { user } = useContext(Global_Context);
  const [formData, setFormData] = useState({
    name: "",
    rent_price: "",
    location: "",
    number_plate: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [editingCar, setEditingCar] = useState(null);
  const [editLoading, setEditLoading] = useState(false);

  // Fetch seller's cars (mock data for now)
  useEffect(() => {
    // Replace with actual API call
    const fetchCars = async () => {
      try {
        // Mock data - replace with your API call
        const mockCars = [
          {
            _id: "1",
            name: "Toyota Camry 2023",
            photo: "/api/placeholder/300/200",
            rent_price: 50,
            location: "New York, NY",
            number_plate: "ABC 1234",
            status: "Free",
          },
          {
            _id: "2",
            name: "Honda Civic 2022",
            photo: "/api/placeholder/300/200",
            rent_price: 45,
            location: "Los Angeles, CA",
            number_plate: "XYZ 5678",
            status: "Rented",
          },
        ];
        setCars(mockCars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setImageFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxFiles: 1,
  });

  const removeImage = () => {
    setImageFile(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditChange = (e) => {
    setEditingCar({
      ...editingCar,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add car API call would go here
      const carData = new FormData();
      carData.append("name", formData.name);
      carData.append("rent_price", formData.rent_price);
      carData.append("location", formData.location);
      carData.append("number_plate", formData.number_plate);
      if (imageFile) {
        carData.append("photo", imageFile);
      }

      console.log("Adding car:", Object.fromEntries(carData));

      // Reset form after submission
      setFormData({
        name: "",
        rent_price: "",
        location: "",
        number_plate: "",
      });
      setImageFile(null);

      alert("Car added successfully!");
    } catch (error) {
      console.error("Error adding car:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditLoading(true);

    try {
      // Update car API call would go here
      console.log("Updating car:", editingCar);

      // Update local state
      setCars(
        cars.map((car) => (car._id === editingCar._id ? editingCar : car))
      );

      setEditingCar(null);
      alert("Car updated successfully!");
    } catch (error) {
      console.error("Error updating car:", error);
    } finally {
      setEditLoading(false);
    }
  };

  const handleDelete = async (carId) => {
    if (confirm("Are you sure you want to delete this car?")) {
      try {
        // Delete car API call would go here
        console.log("Deleting car:", carId);

        // Update local state
        setCars(cars.filter((car) => car._id !== carId));
        alert("Car deleted successfully!");
      } catch (error) {
        console.error("Error deleting car:", error);
      }
    }
  };

  return (
    <div className="dark flex-col text-white flex justify-start items-center p-10 min-h-screen">
      <div className="w-[70%] flex flex-col">
        {/* Header */}
        <div className="p-3 flex justify-between items-center rounded-lg mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Manage Your Cars
          </h1>
        </div>

        {/* Add Car Form Section */}
        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Add New Car</CardTitle>
            <CardDescription className="text-gray-400">
              Fill in the details to list your car for rent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Car Name & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">
                    Car Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-700 text-white focus:ring-blue-500"
                    placeholder="e.g., Toyota Camry 2023"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-gray-300">
                    Location *
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-700 text-white focus:ring-blue-500"
                    placeholder="e.g., New York, NY"
                  />
                </div>
              </div>

              {/* Rent Price & Number Plate */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="rent_price" className="text-gray-300">
                    Rent Price (per day) *
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">
                      $
                    </span>
                    <Input
                      id="rent_price"
                      name="rent_price"
                      type="number"
                      value={formData.rent_price}
                      onChange={handleChange}
                      required
                      min="0"
                      step="0.01"
                      className="pl-8 bg-gray-900 border-gray-700 text-white focus:ring-blue-500"
                      placeholder="50.00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="number_plate" className="text-gray-300">
                    Number Plate *
                  </Label>
                  <Input
                    id="number_plate"
                    name="number_plate"
                    value={formData.number_plate}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-700 text-white focus:ring-blue-500 uppercase"
                    placeholder="ABC 1234"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label className="text-gray-300">Car Photo *</Label>
                {!imageFile ? (
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                      isDragActive
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-gray-600 hover:border-gray-500"
                    }`}
                  >
                    <input {...getInputProps()} />
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-400">
                      {isDragActive
                        ? "Drop the image here..."
                        : "Drag & drop an image here, or click to select"}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src={URL.createObjectURL(imageFile)}
                      alt="Car preview"
                      className="w-full h-48 object-cover rounded-lg border border-gray-700"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={removeImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  disabled={loading || !imageFile}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Adding Car...
                    </>
                  ) : (
                    "Add Car"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Your Cars List */}
        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Your Cars</CardTitle>
            <CardDescription className="text-gray-400">
              Manage your listed cars
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cars.map((car) => (
                <Card key={car._id} className="bg-gray-900/50 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={car.photo}
                          alt={car.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="font-semibold text-white">
                            {car.name}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {car.location} • ${car.rent_price}/day
                          </p>
                          <p className="text-sm text-gray-400">
                            Plate: {car.number_plate} • Status:{" "}
                            <span
                              className={
                                car.status === "Free"
                                  ? "text-green-400"
                                  : "text-yellow-400"
                              }
                            >
                              {car.status}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setEditingCar(car)}
                              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                            >
                              <Pencil className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-gray-800 border-gray-700 text-white">
                            <DialogHeader>
                              <DialogTitle>Edit Car</DialogTitle>
                              <DialogDescription className="text-gray-400">
                                Update the car details
                              </DialogDescription>
                            </DialogHeader>
                            {editingCar && (
                              <form
                                onSubmit={handleEditSubmit}
                                className="space-y-4"
                              >
                                <div className="space-y-2">
                                  <Label
                                    htmlFor="edit-name"
                                    className="text-gray-300"
                                  >
                                    Car Name
                                  </Label>
                                  <Input
                                    id="edit-name"
                                    name="name"
                                    value={editingCar.name}
                                    onChange={handleEditChange}
                                    className="bg-gray-900 border-gray-700 text-white"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label
                                    htmlFor="edit-rent_price"
                                    className="text-gray-300"
                                  >
                                    Rent Price
                                  </Label>
                                  <Input
                                    id="edit-rent_price"
                                    name="rent_price"
                                    type="number"
                                    value={editingCar.rent_price}
                                    onChange={handleEditChange}
                                    className="bg-gray-900 border-gray-700 text-white"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label
                                    htmlFor="edit-location"
                                    className="text-gray-300"
                                  >
                                    Location
                                  </Label>
                                  <Input
                                    id="edit-location"
                                    name="location"
                                    value={editingCar.location}
                                    onChange={handleEditChange}
                                    className="bg-gray-900 border-gray-700 text-white"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label
                                    htmlFor="edit-number_plate"
                                    className="text-gray-300"
                                  >
                                    Number Plate
                                  </Label>
                                  <Input
                                    id="edit-number_plate"
                                    name="number_plate"
                                    value={editingCar.number_plate}
                                    onChange={handleEditChange}
                                    className="bg-gray-900 border-gray-700 text-white uppercase"
                                  />
                                </div>
                                <div className="flex justify-between pt-4">
                                  <Button
                                    type="button"
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => handleDelete(car._id)}
                                  >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                  </Button>
                                  <div className="space-x-2">
                                    <Button
                                      type="button"
                                      variant="outline"
                                      onClick={() => setEditingCar(null)}
                                    >
                                      Cancel
                                    </Button>
                                    <Button
                                      type="submit"
                                      disabled={editLoading}
                                      className="bg-gradient-to-r from-blue-600 to-purple-600"
                                    >
                                      {editLoading
                                        ? "Updating..."
                                        : "Update Car"}
                                    </Button>
                                  </div>
                                </div>
                              </form>
                            )}
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <FloatingDockDemo />
    </div>
  );
}
