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
      allowNull: true,
    },
    product_serie: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
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
      allowNull: true,
    },
    product_processor_cores: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_processor_threads: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_processor_base_frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_processor_max_frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_processor_gpu_chipset: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_processor_includes_cooler: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    // CARACTERISTICAS MOTHERBOARDS
    product_motherboard_chipset: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_motherboard_bios_button_flashback: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_motherboard_platform: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_motherboard_ports_pcie_16x: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_pcie_4x: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_pcie_1x: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_sata: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_vga: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_hdmi: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_dvi: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_displayport: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_m2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_wifi_board: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_motherboard_ethernet_board_speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_motherboard_ports_usb_2_0: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_usb_3_0: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_usb_3_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_usb_3_2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_usb_type_c: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_factor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_motherboard_max_watts_cpu: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_cpu_4pins: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_cpu_4pins_plus: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_ports_24pins: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_consumption: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_motherboard_integrated_processor: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_motherboard_type_ram: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_motherboard_ports_ram: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_motherboard_audio_board: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // CARACTERISTICAS TECLADOS
    product_keyboard_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_keyboard_language: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_keyboard_distribution: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_keyboard_colour: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_keyboard_material: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_keyboard_mechanism_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_keyboard_nkey_rollover: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_keyboard_antighosting: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_keyboard_bluetooth_connection: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_keyboard_bluetooth_receptor_includes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_keyboard_wireless_receptor_includes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_keyboard_audio_hub: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_keyboard_width: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_keyboard_higth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_keyboard_deep: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_keyboard_weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_keyboard_wrist_rest: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_keyboard_cable_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_keyboard_cable_removable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_keyboard_cable_length: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_keyboard_rgb: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // CARACTERISTICAS AURICULARES
    product_earphone_audio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_colour: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_conecction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_microphone_includes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_earphone_audio_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_usb: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_earphone_wireless_receptor: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_earphone_wireless_bluetooth: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_earphone_usb_powered: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_earphone_speaker_diameter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_compatibility: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_dock_includes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_earphone_impedance: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_min_frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_max_frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_sensitivity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_surround: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_earphone_microphone_min_frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_microphone_max_frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_microphone_sensitivity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_microphone_noise_canceling: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_earphone_microphone_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_earphone_microphone_capture_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // CARACTERISTICAS MOUSES
    product_mouse_colour: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_buttons: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_mouse_sensor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_sensor_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_is_wireless: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_mouse_orientation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_dpi_adjustable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_mouse_dpi_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_mouse_dpi_max: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_mouse_frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_max_speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_max_accleration: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_receptor_incluyed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_mouse_weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_dumbbells_incluyed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_mouse_dumbbells_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_mouse_dumbbells_weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_width: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_higth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_deep: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_cable_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_cable_length: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_mouse_cable_removable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_mouse_internal_battery: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_mouse_rechargeable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_mouse_rechargeable_base: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_mouse_rgb: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_mouse_rgb_colours: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // CARACTERISTICAS DISCOS
    product_disk_conecction_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_disk_consumption: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_disk_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_disk_cache_memory: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_disk_rotation_speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_disk_interface_speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_disk_sequential_read_speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_disk_sequential_write_speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_disk_capacity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // CARACTERISTICAS RAM
    product_ram_capacity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_ram_speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_ram_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_ram_memory_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_ram_latency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_ram_voltage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // CARACTERISTICAS DISPLAY
    product_display_lighting_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_panel_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_curved_screen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_display_connection_3_5: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_display_headphone_jack: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_display_hdmi: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_display_dvi: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_display_vga: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_display_display_port: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_display_usb_port_2_0: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_display_usb_port_3_0: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_display_usb_port_3_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_display_mini_display_port: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_display_width: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_heigth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_thickness: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_curvature: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_maximum_consumption: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_font_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_inches: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_visible_inches: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_maximum_resolution: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_maximum_frequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_touch_screen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_display_number_of_speakers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_display_smart_integrated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_display_detachable_foot: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_display_weight_without_base: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_display_remote_control: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_display_cables_included: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // CARACTERISTICAS FUENTES DE PODER
    product_power_sources_watts_nominal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_power_sources_real_watts: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_power_sources_format: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_power_sources_compatible_with_bottom_position: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_power_sources_80_plus_certification: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_power_sources_hybrid_mode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_power_sources_wiring_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_power_sources_line_amps_12V: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_power_sources_digital_source: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_power_sources_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_power_sources_4_pin_cpu_connector: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_power_sources_4_pin_plus_cpu_connector: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_power_sources_24_pin_connector: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_power_sources_6_pin_connector: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_power_sources_2_pin_pcie_plus_connector: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_power_sources_sata_connections: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_power_sources_molex_connections: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_power_sources_floppy_connections: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_power_sources_includes_cable_a_220V: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    // CARACTERISTICAS WEBCAM
    product_webcam_maximum_video_resolution: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_webcam_video_max_resolution_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_webcam_camera_image_resolution: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_webcam_functions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_webcam_max_frames_per_second: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_webcam_accessories_included: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_webcam_cable_length: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_webcam_depth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_webcam_width: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_webcam_heigth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_webcam_weigth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // CARACTERISTICAS MICROPHONE

    product_microphone_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_microphone_microphone_formats: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_microphone_microphone_types: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_microphone_with_power_light: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_microphone_types_of_connections: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_microphone_input_connectors: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_microphone_output_connectors: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_microphone_accessories_included: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // CARACTERISTICAS COOLERS
    product_cooler_amount_of_fans: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cooler_maximum_speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cooler_size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cooler_thickness: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cooler_consumption: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cooler_speed_controller: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_cooler_lighting_with_led: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_cooler_led_lights_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cooler_rgb_connection_system: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cooler_includes_hub_with_rgb_controller: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    // CARACTERISTICAS CONSOLAS
    product_console_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_capacity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_memory_types: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_ram_memory: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_with_wifi: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_console_with_hdmi: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_console_with_usb: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_console_with_bluetooth: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_console_weigth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_heigth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_width: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_depth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_max_amount_of_fps: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_accessories_included: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_console_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_controlls_connectivities: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_processor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_gpu: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_processor_speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_console_number_of_cpu_cores: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_console_with_touch_screen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_console_with_display: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    // CARACTERISTICAS NOTEBOOKS
    product_notebook_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_operating_system: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_cpu_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_gpu_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_removable_battery: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_notebook_gpu_model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_cpu_model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_gpu_memory: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_fingerprint_reader: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_notebook_processor_family: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_hdmi_ports: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_notebook_mini_hdmi_ports: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_notebook_mini_dp_port: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_notebook_usb_2_0_ports_type_a: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_notebook_usb_3_0_ports_type_a: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_notebook_usb_3_2_ports_type_a: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_notebook_usb_3_2_type_c_ports: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_notebook_bluetooth: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_notebook_wifi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_ethernet_ports: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_notebook_weigth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_width: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_depth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_heigth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_solid_capacity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_memory_reader: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_notebook_screen_size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_display_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_resolution: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_touch: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_notebook_update_frecuency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_reader: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_keyboard_ilumination: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_notebook_numeric_pad: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_notebook_webcam: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_notebook_keyboard_backligth_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_slot_1_ram_available: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_notebook_slot_2_ram_available: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_notebook_ram_in_slot_1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_ram_in_slot_2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_memory_generation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_notebook_memory_format: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // CARACTERISTICAS GPU
    product_gpu_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_gpu_video_imput: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_gpu_jumper_for_sli_croosfirex: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_gpu_double_bridge: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_gpu_vga: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_gpu_dvi_digital: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_gpu_hdmi: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_gpu_display_ports: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_gpu_usb_type_c: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_gpu_plate_width: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_gpu_plate_length: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_gpu_plate_thickness: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_gpu_6_pin_pcie_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_gpu_consuption: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_gpu_8_pin_pcie_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_gpu_recomended_total_watts: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_gpu_backplate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_gpu_block_vga_water_cooling: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_gpu_amount_of_coolers_fan: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_gpu_memory_speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_gpu_memory_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_gpu_memory_capacity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_gpu_memory_interface: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_gpu_core_turbo_speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_gpu_process_types: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_gpu_number_of_processes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // CARACTERISTICAS GABINETES
    product_cabinet_factor_model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cabinet_font_in_top_position: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_cabinet_windowed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_cabinet_window_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cabinet_colors: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cabinet_usb_2_0_front: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_usb_3_0_front: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_usb_type_c: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_usb_type_c_internal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_width: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cabinet_heigth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cabinet_depth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cabinet_5_25_drives_supported: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_amount_of_slots: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_2_5_drives_supported: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_3_5_drives_supported: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_3_25_drives_supported: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_supported_font_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_cabinet_supported_80mm_fan_coolers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_80mm_fan_coolers_included: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_supported_120mm_fan_coolers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_120mm_fan_coolers_included: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_supported_140mm_fan_coolers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_140mm_fan_coolers_included: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_supported_200mm_fan_coolers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_200mm_fan_coolers_included: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_radiator_support_240mm: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_radiator_support_280mm: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_space_for_radiator_water: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_cabinet_radiator_support_360mm: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_radiator_support_420mm: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_cabinet_lighting_controler: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    product_img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    product_suspense: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
