import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Product = sequelize.define(
  'product',
  {
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true,
        min: 8,
        max: 50,
      },
    },
    product_brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_serie: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true,
      },
    },
    product_price: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
      validate: {
        min: 0,
        max: 9999999,
      },
    },
    product_ofer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    product_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1,
        max: 5,
      },
    },
    product_category: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // CARACTERISTICAS PROCESADORES
    product_processor_socket: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_processor_cores: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_processor_threads: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_processor_base_frequency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_processor_max_frequency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_processor_gpu_chipset: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_processor_includes_cooler: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },

    // CARACTERISTICAS MOTHERBOARDS
    product_motherboard_chipset: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_motherboard_bios_button_flashback: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_motherboard_platform: {
      type: DataTypes.ENUM('AMD', 'Intel'),
      allowNull: true
    },
    product_motherboard_ports_pcie_16x: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_pcie_4x: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_pcie_1x: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_sata: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_vga: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_hdmi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_dvi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_displayport: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_m2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_wifi_board: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_motherboard_ethernet_board_speed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_motherboard_ports_usb_2_0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_usb_3_0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_usb_3_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_usb_3_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_usb_type_c: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_factor: {
      type: DataTypes.ENUM('M-ATX', 'ATX', 'ITX', 'E-ATX'),
      allowNull: true
    },
    product_motherboard_max_watts_cpu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_cpu_4pins: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_cpu_4pins_plus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_24pins: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_consumption: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_integrated_processor: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_motherboard_type_ram: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_ports_ram: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_motherboard_audio_board: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    // CARACTERISTICAS TECLADOS
    product_keyboard_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_keyboard_language: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_keyboard_distribution: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_keyboard_colour: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_keyboard_material: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_keyboard_mechanism_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_keyboard_nkey_rollover: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_keyboard_antighosting: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_keyboard_bluetooth_connection: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_keyboard_bluetooth_receptor_includes: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_keyboard_wireless_receptor_includes: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_keyboard_audio_hub: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_keyboard_width: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_keyboard_higth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_keyboard_deep: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_keyboard_weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_keyboard_wrist_rest: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_keyboard_cable_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_keyboard_cable_removable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_keyboard_cable_length: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_keyboard_rgb: {
      type: DataTypes.STRING,
      allowNull: true
    },

    // CARACTERISTICAS AURICULARES
    product_earphone_audio: {
      type: DataTypes.ENUM('2.0', '1', '2', '7.1'),
      allowNull: true
    },
    product_earphone_colour: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_earphone_conecction: {
      type: DataTypes.ENUM('Cableado', 'Inalámbrico'),
      allowNull: true
    },
    product_earphone_microphone_includes: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_earphone_audio_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_earphone_usb: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_earphone_wireless_receptor: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_earphone_wireless_bluetooth: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_earphone_usb_powered: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_earphone_speaker_diameter: {
      type: DataTypes.ENUM('20', '30', '32', '53', '40', '50'),
      allowNull: true
    },
    product_earphone_compatibility: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_earphone_: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_earphone_dock_includes: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_earphone_impedance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_earphone_min_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_earphone_max_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_earphone_sensitivity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_earphone_surround: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_earphone_microphone_min_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_earphone_microphone_max_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_earphone_microphone_sensitivity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_earphone_microphone_noise_canceling: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_earphone_microphone_type: {
      type: DataTypes.ENUM('Desmontable', 'Retráctil', 'Integrado'),
      allowNull: true
    },
    product_earphone_microphone_capture_type: {
      type: DataTypes.ENUM('Unidireccional', 'Omnidireccional', 'No especificado', 'Bidireccional'),
      allowNull: true
    },
    // CARACTERISTICAS MOUSE
    product_mouse_colour: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_mouse_buttons: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_mouse_sensor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_mouse_sensor_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_mouse_is_wireless: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_mouse_orientation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_mouse_dpi_adjustable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_mouse_dpi_min: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_mouse_dpi_max: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_mouse_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_mouse_max_speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_mouse_max_accleration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_mouse_processor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_mouse_receptor_incluyed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_mouse_weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_mouse_dumbbells_incluyed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_mouse_dumbbells_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_mouse_dumbbells_weight: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_mouse_width: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_mouse_higth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_mouse_deep: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_mouse_cable_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_mouse_cable_length: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_mouse_cable_removable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_mouse_internal_battery: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_mouse_rechargeable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_mouse_rechargeable_base: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_mouse_rgb: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    product_mouse_rgb_colours: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // CARACTERISTICAS DISCOS
    product_disk_conecction_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_disk_consumption: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_disk_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_disk_cache_memory: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_disk_rotation_speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_disk_interface_speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_disk_sequential_read_speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_disk_sequential_write_speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_disk_capacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    // CARACTERISTICAS RAM
    product_ram_capacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_ram_speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_ram_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_ram_memory_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_ram_latency: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_ram_voltage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    product_array_img: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      defaultValue: [],
    },
  },
  {
    timestamps: false,
  }
);

export default Product;
