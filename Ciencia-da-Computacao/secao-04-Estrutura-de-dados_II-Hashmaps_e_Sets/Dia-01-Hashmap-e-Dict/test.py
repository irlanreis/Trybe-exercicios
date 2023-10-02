class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.left = None
        self.right = None


class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, key, value):
        self.root = self._insert_recursive(self.root, key, value)

    def _insert_recursive(self, node, key, value):
        if node is None:
            return Node(key, value)
        if key < node.key:
            node.left = self._insert_recursive(node.left, key, value)
        elif key > node.key:
            node.right = self._insert_recursive(node.right, key, value)
        else:  # Atualiza o valor se a chave já existe
            node.value = value
        return node

    def search(self, key):
        return self._search_recursive(self.root, key)

    def _search_recursive(self, node, key):
        if node is None:
            return None
        if key == node.key:
            return node.value
        elif key < node.key:
            return self._search_recursive(node.left, key)
        else:
            return self._search_recursive(node.right, key)

    def inorder_traversal(self):
        result = []
        self._inorder_traversal_recursive(self.root, result)
        return result

    def _inorder_traversal_recursive(self, node, result):
        if node:
            self._inorder_traversal_recursive(node.left, result)
            result.append((node.key, node.value))
            self._inorder_traversal_recursive(node.right, result)

    def delete(self, key):
        self.root = self._delete_recursive(self.root, key)

    def _delete_recursive(self, node, key):
        if node is None:
            return node
        if key < node.key:
            node.left = self._delete_recursive(node.left, key)
        elif key > node.key:
            node.right = self._delete_recursive(node.right, key)
        else:
            if node.left is None:
                return node.right
            elif node.right is None:
                return node.left
            node.key, node.value = self._min_value(node.right)
            node.right = self._delete_recursive(node.right, node.key)
        return node

    def _min_value(self, node):
        while node.left is not None:
            node = node.left
        return node.key, node.value


# Exemplo de uso:
tree = BinaryTree()
tree.insert(5, "Cinco")
tree.insert(3, "Três")
tree.insert(7, "Sete")
tree.insert(2, "Dois")
tree.insert(4, "Quatro")
tree.insert(6, "Seis")
tree.insert(8, "Oito")

print("Árvore Binária em ordem:")
print(tree.inorder_traversal())

print("Valor da chave 3:", tree.search(3))

tree.delete(3)
print("Árvore Binária após deletar a chave 3:")
print(tree.inorder_traversal())
