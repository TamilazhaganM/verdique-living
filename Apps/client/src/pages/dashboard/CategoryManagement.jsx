import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import CategoryHeader from "../../components/dashboard/category/CategoryHeader";
import SearchCategory from "../../components/dashboard/category/SearchCategory";
import CategoryTable from "../../components/dashboard/category/CategoryTable";
import CategoryModal from "../../components/dashboard/category/CategoryModal";
import DeleteCategoryModal from "../../components/dashboard/category/DeleteCategoryModal";

import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../services/category.service";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const response = await getAllCategories();

      setCategories(response.data);
    } catch (error) {
      toast.error("Failed to load categories");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Add

  const handleAdd = () => {
    setEditingCategory(null);
    setIsModalOpen(true);
  };

  // Edit

  const handleEdit = (category) => {
    setEditingCategory(category);
    setIsModalOpen(true);
  };

  // Save

  const handleSubmit = async (formData) => {
    try {
      if (editingCategory) {
        await updateCategory(editingCategory._id, formData);
        toast.success("Category updated");
      } else {
        await createCategory(formData);
        toast.success("Category created");
      }

      fetchCategories();
      setIsModalOpen(false);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  // Delete

  const handleDeleteClick = (category) => {
    setSelectedCategory(category);
    setDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await deleteCategory(selectedCategory._id);

      toast.success("Category deleted");

      fetchCategories();

      setDeleteModalOpen(false);
      setSelectedCategory(null);
    } catch (error) {
      toast.error("Delete failed");
      console.log(error);
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading Categories...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <CategoryHeader onAdd={handleAdd} />

      <SearchCategory
        search={search}
        setSearch={setSearch}
      />

      <CategoryTable
        categories={filteredCategories}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
      />

      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        editingCategory={editingCategory}
      />

      <DeleteCategoryModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        category={selectedCategory}
      />

    </div>
  );
};

export default CategoryManagement;