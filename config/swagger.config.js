module.exports = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Documentation API", // short title.
      description: "dokumentasi untuk api kelola produk", //  desc.
      version: "0.0.1", // version number
      contact: {
        name: "Tazkiaap", // your name
        email: "atazkia27@gmail.com", // your email
        url: "", // your website
      },
      servers: ["http://localhost:3003/api"],
    },
    paths: {
      "/produk": {
        get: {
          summary: "Get All Produk",
          description: "Berfungsi untuk mengambil semua data produk",
          tags: ["Produk"],
          responses: {
            200: {
              description: "Berhasil Menampilkan Data",
              content: {
                "application/json": {
                  schema: {
                    type: Object,
                    properties: {
                      _id: {
                        type: Object,
                        example: "617424ff384260292e4a3b8a",
                      },
                      nama: {
                        type: String,
                        example: "Pepsodent",
                      },
                      stok: {
                        type: Number,
                        example: 200,
                      },
                      hargaJual: {
                        type: Number,
                        example: 13500,
                      },
                    },
                  },
                },
              },
            },
            409: {
              description: "Some error while show produk.",
            },
          },
        },
        post: {
          summary: "Add Produk",
          description: "Berfungsi untuk menambah data produk baru",
          tags: ["Produk"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: Object,
                  properties: {
                    nama: {
                      type: String,
                      example: "Ultramilk",
                    },
                    laba: {
                      type: Number,
                      example: 1500,
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Berhasil Menambah Data",
              content: {
                "application/json": {
                  schema: {
                    type: Object,
                    properties: {
                      _id: {
                        type: Object,
                        example: "61767f2f781a470863b73cbf",
                      },
                      nama: {
                        type: String,
                        example: "Ultramilk",
                      },
                      laba: {
                        type: Number,
                        example: 500,
                      },
                    },
                  },
                },
              },
            },
            409: {
              description: "Some error while create produk.",
            },
          },
        },
      },

      "/produk/{id}": {
        get: {
          summary: "Get Detail Produk By Id",
          description: "Berfungsi untuk mengambil data produk berdasarkan id dan hasilnya lebih detail daripada get all",
          tags: ["Produk"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Id Produk Yang Akan Dicari",
              schema: {
                type: Object,
                example: "617424ff384260292e4a3b8a",
              },
            },
          ],
          responses: {
            200: {
              description: "Berhasil Menampilkan Data",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Produk",
                  },
                },
              },
            },
            409: {
              description: "Some error while show produk.",
            },
          },
        },

        put: {
          summary: "Update Produk",
          description: "Berfungsi untuk mengupdate data produk",
          tags: ["Produk"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Id Produk Yang Akan Di Update",
              schema: {
                type: Object,
                example: "617424ff384260292e4a3b8a",
              },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: Object,
                  properties: {
                    nama: {
                      type: String,
                      example: "Pepsodent",
                    },
                    laba: {
                      type: Number,
                      example: 500,
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Berhasil Mengupdate Data",
            },
            409: {
              description: "Some error while update produk.",
            },
          },
        },

        delete: {
          summary: "Delete Produk",
          description: "Berfungsi untuk menghapus data produk",
          tags: ["Produk"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "id produk",
              schema: {
                type: Object,
                example: "617424ff384260292e4a3b8a",
              },
            },
          ],
          responses: {
            200: {
              description: "Berhasil Menghapus Data",
            },
            409: {
              description: "Some error while delete produk.",
            },
          },
        },
      },

      "/distributor": {
        get: {
          summary: "Get All Distributor",
          description: "Berfungsi untuk mengambil semua data distributor",
          tags: ["Distributor"],
          responses: {
            200: {
              description: "Berhasil Menampilkan Data",
              content: {
                "application/json": {
                  schema: {
                    type: Object,
                    properties: {
                      _id: {
                        type: Object,
                        example: "61742e083805e08d9cf030c8",
                      },
                      nama: {
                        type: String,
                        example: "Ina Oke",
                      },
                    },
                  },
                },
              },
            },
            409: {
              description: "Some error while show data.",
            },
          },
        },
        post: {
          summary: "Add Distributor",
          description: "Berfungsi untuk menambah data distributor baru",
          tags: ["Distributor"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: Object,
                  properties: {
                    nama: {
                      type: String,
                      example: "Maju Jaya",
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Berhasil Menambah Data",
              content: {
                "application/json": {
                  schema: {
                    type: Object,
                    properties: {
                      _id: {
                        type: Object,
                        example: "61742e083805e08d9cf030c8",
                      },
                      nama: {
                        type: String,
                        example: "Maju Jaya",
                      },
                    },
                  },
                },
              },
            },
            409: {
              description: "Some error while show data",
            },
          },
        },
      },

      "/distributor/{id}": {
        get: {
          summary: "Get Detail Distributor By Id",
          description: "Berfungsi untuk mengambil data distributor berdasarkan id",
          tags: ["Distributor"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Id Distributor",
              schema: {
                type: Object,
                example: "61742e083805e08d9cf030c8",
              },
            },
          ],
          responses: {
            200: {
              description: "Berhasil Menampilkan Data",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Distributor",
                  },
                },
              },
            },
            409: {
              description: "Some error while show data.",
            },
          },
        },

        put: {
          summary: "Update Distributor",
          description: "Berfungsi untuk mengupdate data distributor",
          tags: ["Distributor"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Id Distributor",
              schema: {
                type: Object,
                example: "61742e083805e08d9cf030c8",
              },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: Object,
                  properties: {
                    nama: {
                      type: String,
                      example: "Ina Oke",
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Berhasil Mengupdate Data",
            },
            409: {
              description: "Some error while update data.",
            },
          },
        },

        delete: {
          summary: "Delete Distributor",
          description: "Berfungsi untuk menghapus data distributor",
          tags: ["Distributor"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Id Distributor",
              schema: {
                type: Object,
                example: "61742e083805e08d9cf030c8",
              },
            },
          ],
          responses: {
            200: {
              description: "Berhasil Menghapus Data",
            },
            409: {
              description: "Some error while delete data.",
            },
          },
        },
      },

      "/pembelian": {
        get: {
          summary: "Get All Pembelian",
          description: "Berfungsi untuk mengambil semua data pembelian",
          tags: ["Pembelian"],
          responses: {
            200: {
              description: "Berhasil Menampilkan Data",
              content: {
                "application/json": {
                  schema: {
                    type: Object,
                    properties: {
                      _id: {
                        type: Object,
                        example: "61767f9a781a470863b73cc2",
                      },
                      produk: {
                        type: Object,
                        example: {
                          _id: "61767f2f781a470863b73cbf",
                          nama: "Luwak White Coffee",
                        },
                      },
                      jumlah: {
                        type: Number,
                        example: 1000,
                      },
                      hargaBeli: {
                        type: Number,
                        example: 3000,
                      },
                      tanggal: {
                        type: Date,
                        example: "2021-10-12T16:16:09.704Z",
                      },
                      distributor: {
                        type: Object,
                        example: {
                          _id: "616590d252bbc97391174bf5",
                          nama: "Indofoood",
                        },
                      },
                      statusEdit: {
                        type: Boolean,
                        example: false,
                      },
                    },
                  },
                },
              },
            },
            409: {
              description: "Some error while show data.",
            },
          },
        },
        post: {
          summary: "Add Pembelian",
          description: "Berfungsi untuk menambah data pembelian baru",
          tags: ["Pembelian"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: Object,
                  properties: {
                    produk: {
                      type: Object,
                      example: "61767f2f781a470863b73cbf",
                    },
                    jumlah: {
                      type: Number,
                      example: 1000,
                    },
                    hargaBeli: {
                      type: Number,
                      example: 1000,
                    },
                    distributor: {
                      type: Object,
                      example: "61742e083805e08d9cf030c8",
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Berhasil Menambah Data",
              content: {
                "application/json": {
                  schema: {
                    type: Object,
                    properties: {
                      _id: {
                        type: Object,
                        example: "61767f9a781a470863b73cc2",
                      },
                      produk: {
                        type: Object,
                        example: "61767f2f781a470863b73cbf",
                      },
                      jumlah: {
                        type: Number,
                        example: 1000,
                      },
                      hargaBeli: {
                        type: Number,
                        example: 3000,
                      },
                      totalHarga: {
                        type: Number,
                        example: 3000000,
                      },
                      distributor: {
                        type: Object,
                        example: "61742e083805e08d9cf030c8",
                      },
                    },
                  },
                },
              },
            },
            409: {
              description: "Some error while show data.",
            },
          },
        },
      },

      "/pembelian/{id}": {
        get: {
          summary: "Get Detail Pembelian By Id",
          description: "Berfungsi untuk mengambil data pembelian berdasarkan id",
          tags: ["Pembelian"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Id Pembelian",
              schema: {
                type: Object,
                example: "61767f9a781a470863b73cc2",
              },
            },
          ],
          responses: {
            200: {
              description: "Berhasil Menampilkan Data",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Pembelian",
                  },
                },
              },
            },
            409: {
              description: "Some error while show data.",
            },
          },
        },

        put: {
          summary: "Update Pembelian",
          description: "Berfungsi untuk mengupdate data pembelian",
          tags: ["Pembelian"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Id Pembelian",
              schema: {
                type: Object,
                example: "61767f9a781a470863b73cc2",
              },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: Object,
                  properties: {
                    produk: {
                      type: Object,
                      example: "61767f2f781a470863b73cbf",
                    },
                    jumlah: {
                      type: Number,
                      example: 1000,
                    },
                    hargaBeli: {
                      type: Number,
                      example: 1000,
                    },
                    distributor: {
                      type: Object,
                      example: "61742e083805e08d9cf030c8",
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Berhasil Mengupdate Data",
            },
            409: {
              description: "Some error while update data.",
            },
          },
        },

        delete: {
          summary: "Delete Pembelian",
          description: "Berfungsi untuk menghapus data pembelian",
          tags: ["Pembelian"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Id Pembelian",
              schema: {
                type: Object,
                example: "61767f9a781a470863b73cc2",
              },
            },
          ],
          responses: {
            200: {
              description: "Berhasil Menghapus Data",
            },
            409: {
              description: "Some error while delete data.",
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Produk: {
          type: Object,
          properties: {
            _id: {
              type: Object,
              example: "6177b05051c2c234bbabdbbb",
            },
            nama: {
              type: String,
              required: true,
              example: "Luwak White Coffee",
            },
            stok: {
              type: Number,
              example: 200,
            },
            hargaBeli: {
              type: Number,
              example: 6000,
            },
            hargaJual: {
              type: Number,
              example: 7000,
            },
            laba: {
              type: Number,
              required: true,
              example: 1000,
            },
            createAt: {
              type: Date,
              example: "2021-10-12T14:57:22.650Z",
            },
            updateAt: {
              type: Date,
              example: "2021-10-12T14:57:22.650Z",
            },
            deleteAt: {
              type: Date,
              example: "2021-10-12T14:57:22.650Z",
            },
            statusDelete: {
              type: Boolean,
              example: false,
            },
          },
        },

        Distributor: {
          type: Object,
          properties: {
            _id: {
              type: Object,
              example: "61742e083805e08d9cf030c8",
            },
            nama: {
              type: String,
              required: true,
              example: "Ina Oke",
            },
            createAt: {
              type: Date,
              example: "2021-10-12T14:57:22.650Z",
            },
            updateAt: {
              type: Date,
              example: "2021-10-12T14:57:22.650Z",
            },
            deleteAt: {
              type: Date,
              example: "2021-10-12T14:57:22.650Z",
            },
            statusDelete: {
              type: Boolean,
              example: false,
            },
          },
        },

        Pembelian: {
          type: Object,
          properties: {
            _id: {
              type: Object,
              example: "61767f9a781a470863b73cc2",
            },
            produk: {
              type: Object,
              ref: "Produk",
              required: true,
              example: {
                _id: "61767f2f781a470863b73cbf",
                nama: "Luwak White Coffee",
              },
            },
            jumlah: {
              type: Number,
              required: true,
              example: 200,
            },
            hargaBeli: {
              type: Number,
              required: true,
              example: 8000,
            },
            tanggal: {
              type: Date,
              example: "2021-10-12T14:57:22.650Z",
            },
            distributor: {
              type: Object,
              ref: "Distributor",
              required: true,
              example: {
                _id: "61742e083805e08d9cf030c8",
                nama: "Ina Oke",
              },
            },
            createAt: {
              type: Date,
              example: "2021-10-12T14:57:22.650Z",
            },
            updateAt: {
              type: Date,
              example: "2021-10-12T14:57:22.650Z",
            },
            deleteAt: {
              type: Date,
              example: "2021-10-12T14:57:22.650Z",
            },
            statusEdit: {
              type: Boolean,
              example: false,
            },
            statusDelete: {
              type: Boolean,
              example: false,
            },
          },
        },
      },
    },
  },

  apis: ["app.js"],
};
