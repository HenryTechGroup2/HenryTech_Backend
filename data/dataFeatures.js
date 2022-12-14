function randomNumArray(length) {
  return Math.floor(Math.random() * length);
}
function generateProcessorRandomFeatures(procesadorBrand) {
  const processorFeatures = {
    product_processor_socket:
      procesadorBrand === 'Intel'
        ? ['1200 Comet Lake', '1700 Alder Lake-S', '1151 Coffe Lake'][
            randomNumArray(3)
          ]
        : ['AM4', 'AM5'][randomNumArray(2)],
    product_processor_cores: ['2', '4', '8', '16'][randomNumArray(4)],
    product_processor_threads: ['4', '8', '16', '32'][randomNumArray(4)],
    product_processor_base_frequency: [
      '3800 Mhz',
      '3700Mhz',
      '3600Mhz',
      '3400Mhz',
    ][randomNumArray(4)],
    product_processor_max_frequency: ['4000 Mhz', '4100Mhz', '4200Mhz'][
      randomNumArray(3)
    ],
    product_processor_gpu_chipset: [
      'NO Posee Gráficos Integrados',
      'UHD Graphics 710',
      'UHD Graphics 610',
    ][randomNumArray(3)],
    product_processor_includes_cooler: [true, false][randomNumArray(2)],
  };
  return processorFeatures;
}
function generateMotherboardRandomFeatures(motherboardBrand) {
  const motherboardFeatures = {
    product_motherboard_chipset:
      motherboardBrand === 'AMD'
        ? ['AMD A520', 'AMD X570', 'AMD B550'][randomNumArray(3)]
        : ['Intel H310', 'Intel Z590', 'Intel H610'][randomNumArray(3)],
    product_motherboard_bios_button_flashback: [true, false][randomNumArray(2)],
    product_motherboard_platform: motherboardBrand,
    product_motherboard_ports_pcie_16x: [1, 2, 3][randomNumArray(3)],
    product_motherboard_ports_pcie_4x: [0, 1][randomNumArray(2)],
    product_motherboard_ports_pcie_1x: [1, 2][randomNumArray(2)],
    product_motherboard_ports_sata: [4, 6, 8][randomNumArray(3)],
    product_motherboard_ports_vga: [0, 1][randomNumArray(2)],
    product_motherboard_ports_hdmi: [0, 1][randomNumArray(2)],
    product_motherboard_ports_dvi: [0, 1][randomNumArray(2)],
    product_motherboard_ports_displayport: [0, 1][randomNumArray(2)],
    product_motherboard_ports_m2: [1, 2][randomNumArray(2)],
    product_motherboard_wifi_board: [true, false][randomNumArray(2)],
    product_motherboard_ethernet_board_speed: [
      'Gigabit LAN 10/100/1000 Mb/s',
      '2.5 Gigabit LAN 10/100/1000/2500',
      '2.5 Gb/s',
      '1 Gb/s',
    ][randomNumArray(4)],
    product_motherboard_ports_usb_2_0: [2, 4, 6][randomNumArray(3)],
    product_motherboard_ports_usb_3_0: [0, 2, 4][randomNumArray(3)],
    product_motherboard_ports_usb_3_1: [0, 2][randomNumArray(2)],
    product_motherboard_ports_usb_3_2: [0, 2, 4][randomNumArray(3)],
    product_motherboard_ports_usb_type_c: [0, 1][randomNumArray(2)],
    product_motherboard_factor: ['M-ATX', 'ATX', 'ITX', 'E-ATX'][
      randomNumArray(4)
    ],
    product_motherboard_max_watts_cpu: [105, 150, 235, 395][randomNumArray(4)],
    product_motherboard_ports_cpu_4pins: 1,
    product_motherboard_ports_cpu_4pins_plus: [0, 1][randomNumArray(2)],
    product_motherboard_ports_24pins: 1,
    product_motherboard_consumption: ['10W', '30', '35', '50 W'][
      randomNumArray(4)
    ],
    product_motherboard_integrated_processor: [true, false][randomNumArray(2)],
    product_motherboard_type_ram: ['DDR3', 'DDR4', 'DDR5'][randomNumArray(3)],
    product_motherboard_ports_ram: [2, 4][randomNumArray(2)],
    product_motherboard_audio_board: [
      '7.1 DAC Sabre Hi-Fi + ALC 4082',
      '7.1 Realtek ALC 887',
      '7.1 Realtek ALC 1220',
    ][randomNumArray(3)],
  };
  return motherboardFeatures;
}

function generateKeyboardRandomFeatures() {
  const keyboardFeatures = {
    product_keyboard_type: ['Completo', 'Compacto TKL', 'Compacto 60%'][
      randomNumArray(3)
    ],
    product_keyboard_language: ['Español', 'Ingles'][randomNumArray(2)],
    product_keyboard_distribution: ['Latinoamerica', 'Internacional'][
      randomNumArray(2)
    ],
    product_keyboard_colour: ['Blanco', 'Negro'][randomNumArray(2)],
    product_keyboard_material: ['Plástico', 'Aluminio'][randomNumArray(2)],
    product_keyboard_mechanism_type: ['Mecánico', 'Membrana', 'Semi Mecánico'][
      randomNumArray(3)
    ],
    product_keyboard_nkey_rollover: [true, false][randomNumArray(2)],
    product_keyboard_antighosting: [true, false][randomNumArray(2)],
    product_keyboard_bluetooth_connection: [true, false][randomNumArray(2)],
    product_keyboard_bluetooth_receptor_includes: [true, false][
      randomNumArray(2)
    ],
    product_keyboard_wireless_receptor_includes: [true, false][
      randomNumArray(2)
    ],
    product_keyboard_audio_hub: [true, false][randomNumArray(2)],
    product_keyboard_width: ['375 mm', '440 mm', '460 mm'][randomNumArray(3)],
    product_keyboard_higth: ['30  mm', '32  mm', '35 mm'][randomNumArray(3)],
    product_keyboard_deep: ['124 mm', '153 mm', '218 mm'][randomNumArray(3)],
    product_keyboard_weight: ['1.09 Kg', '1.05 Gg', '1.56Kg'][
      randomNumArray(3)
    ],
    product_keyboard_wrist_rest: [true, false][randomNumArray(2)],
    product_keyboard_cable_type: ['Mallado de tela', 'Plastico'][
      randomNumArray(2)
    ],
    product_keyboard_cable_removable: [true, false][randomNumArray(2)],
    product_keyboard_cable_length: ['1.8 metros', '1.2 metros', '1 metros'][
      randomNumArray(3)
    ],
    product_keyboard_rgb: ['RGB', 'Rojo', 'Azul', 'No RGB'][randomNumArray(4)],
  };
  return keyboardFeatures;
}
function generateEarphoneRandomFeatures() {
  const earphoneFeatures = {
    product_earphone_audio: ['2.0', '1', '2', '7.1'][randomNumArray(4)],
    product_earphone_colour: ['Negro', 'Blanco'][randomNumArray(2)],
    product_earphone_conecction: ['Cableado', 'Inalámbrico'][randomNumArray(2)],
    product_earphone_microphone_includes: [true, false][randomNumArray(2)],
    product_earphone_audio_type: 'Headset',
    product_earphone_usb: [true, false][randomNumArray(2)],
    product_earphone_wireless_receptor: [true, false][randomNumArray(2)],
    product_earphone_wireless_bluetooth: [true, false][randomNumArray(2)],
    product_earphone_usb_powered: [true, false][randomNumArray(2)],
    product_earphone_speaker_diameter: ['20', '30', '32', '53', '40', '50'][
      randomNumArray(6)
    ],
    product_earphone_compatibility: [
      'PC,PS4',
      'PC,PS4,XBOX',
      'PC,NINTENDO SWITCH',
    ][randomNumArray(3)],
    product_earphone_dock_includes: [true, false][randomNumArray(2)],
    product_earphone_impedance: ['32 Ω', '42 Ω', '50 Ω'][randomNumArray(3)],
    product_earphone_min_frequency: ['15 Hz', '20 Hz', '30 Hz', '50 Hz'][
      randomNumArray(4)
    ],
    product_earphone_max_frequency: [
      '20000 Hz',
      '18000 Hz',
      '15000 Hz',
      '19000 Hz',
    ][randomNumArray(4)],
    product_earphone_sensitivity: ['91.7 db', '94.2 db', '106 db'][
      randomNumArray(3)
    ],
    product_earphone_surround: [true, false][randomNumArray(2)],
    product_earphone_microphone_min_frequency: [
      '100 Hz',
      '125 Hz',
      '110 Hz',
      '105 Hz',
    ][randomNumArray(4)],
    product_earphone_microphone_max_frequency: [
      '7000 Hz',
      '6000 Hz',
      '6500 Hz',
      '6700 Hz',
    ][randomNumArray(4)],
    product_earphone_microphone_sensitivity: [
      '102 db',
      '93 db',
      '95 db',
      '110 db',
    ][randomNumArray(4)],
    product_earphone_microphone_noise_canceling: [true, false][
      randomNumArray(2)
    ],
    product_earphone_microphone_type: ['Desmontable', 'Retráctil', 'Integrado'][
      randomNumArray(3)
    ],
    product_earphone_microphone_capture_type: [
      'Unidireccional',
      'Omnidireccional',
      'No especificado',
      'Bidireccional',
    ][randomNumArray(4)],
  };
  return earphoneFeatures;
}
function generateMouseRandomFeatures() {
  const mouseFeatures = {
    product_mouse_colour: ['Negro', 'Blanco'][randomNumArray(2)],
    product_mouse_buttons: [2, 3, 5][randomNumArray(3)],
    product_mouse_sensor: [
      'Hero 25',
      'Hero',
      'Pixart PWM3389',
      'Pixart Paw3370',
    ][randomNumArray(4)],
    product_mouse_sensor_type: 'Óptico',
    product_mouse_is_wireless: [true, false][randomNumArray(2)],
    product_mouse_orientation: 'Para diestros',
    product_mouse_dpi_adjustable: [true, false][randomNumArray(2)],
    product_mouse_dpi_min: [100, 200, 50][randomNumArray(3)],
    product_mouse_dpi_max: [20000, 25000, 18000][randomNumArray(3)],
    product_mouse_frequency: ['1000 Hz', '800 Hz', '900 Hz'][randomNumArray(3)],
    product_mouse_max_speed: ['400 ips', '350 ips', '450 ips'][
      randomNumArray(3)
    ],
    product_mouse_max_accleration: ['40 G', '50 G', '45 G'][randomNumArray(3)],
    product_mouse_receptor_incluyed: [true, false][randomNumArray(2)],
    product_mouse_weight: ['74 gr', '124 gr', '150 gr'][randomNumArray(3)],
    product_mouse_dumbbells_incluyed: true,
    product_mouse_dumbbells_amount: [1, 2, 3][randomNumArray(3)],
    product_mouse_dumbbells_weight: ['10 gr', '5 gr', '12 gr'][
      randomNumArray(3)
    ],
    product_mouse_width: ['66.5 mm', '76.5 mm', '70.5 mm'][randomNumArray(3)],
    product_mouse_higth: ['40.4 mm', '42.8 mm', '50.4 mm'][randomNumArray(3)],
    product_mouse_deep: ['130.3 mm', '120.6 mm', '110.3 mm'][randomNumArray(3)],
    product_mouse_cable_type: ['Tela mallada', 'Plastico'][randomNumArray(2)],
    product_mouse_cable_length: ['1.8 Mts', '2 Mts', '2.5 Mts'][
      randomNumArray(3)
    ],
    product_mouse_cable_removable: [true, false][randomNumArray(2)],
    product_mouse_internal_battery: [true, false][randomNumArray(2)],
    product_mouse_rechargeable: [true, false][randomNumArray(2)],
    product_mouse_rechargeable_base: [true, false][randomNumArray(2)],
    product_mouse_rgb: [true, false][randomNumArray(2)],
    product_mouse_rgb_colours: ['RGB', 'Rojo', 'Azul'][randomNumArray(3)],
  };
  return mouseFeatures;
}
function generateDiskRandomFeatures() {
  const diskFeatures = {
    product_disk_conecction_type: ['SATA', 'M2'][randomNumArray(2)],
    product_disk_consumption: ['1 W', '2 W', '3 W', '4 W'][randomNumArray(4)],
    product_disk_type: ['Sólido', 'Rigido'][randomNumArray(2)],
    product_disk_cache_memory: ['0 Mb', '64 Mb', '50 Mb'][randomNumArray(3)],
    product_disk_rotation_speed: ['7200 RPM', '0 RPM', '6000 RPM'][
      randomNumArray(3)
    ],
    product_disk_interface_speed: ['6.0', '5.0', '4.5'][randomNumArray(3)],
    product_disk_sequential_read_speed: ['500 Mb/s', '600 Mb/s', '650 Mb/s'][
      randomNumArray(3)
    ],
    product_disk_sequential_write_speed: ['320 Mb/s', '400 Mb/s', '350 Mb/s'][
      randomNumArray(3)
    ],
    product_disk_capacity: ['120 Gb', '240 Gb', '480 Gb', '1 Tb', '2 Tb'][
      randomNumArray(5)
    ],
  };
  return diskFeatures;
}
function generateRamRandomFeatures() {
  const ramFeatures = {
    product_ram_capacity: ['4 Gb', '8 Gb', '16 Gb'][randomNumArray(3)],
    product_ram_speed: ['2666 Mhz', '2800 Mhz', '3000 Mhz', '3200 Mhz'][
      randomNumArray(4)
    ],
    product_ram_type: ['DDR4', 'DDR3', 'DDR5'][randomNumArray(3)],
    product_ram_memory_amount: [1, 2][randomNumArray(2)],
    product_ram_latency: ['10 Cl', '15 Cl', '18 Cl'][randomNumArray(3)],
    product_ram_voltage: ['1 V', '2 V', '1.2 V'][randomNumArray(3)],
  };
  return ramFeatures;
}
function generateDisplayRandomFeatures() {
  const displayFeatures = {
    product_display_lighting_type: 'LED',
    product_display_panel_type: ['IPS', 'TN', 'VA'][randomNumArray(3)],
    product_display_curved_screen: [true, false][randomNumArray(2)],
    product_display_connection_3_5: [true, false][randomNumArray(2)],
    product_display_headphone_jack: [true, false][randomNumArray(2)],
    product_display_hdmi: [0, 1, 2][randomNumArray(3)],
    product_display_dvi: [0, 1, 2][randomNumArray(3)],
    product_display_vga: [0, 1, 2][randomNumArray(3)],
    product_display_display_port: [0, 1, 2][randomNumArray(3)],
    product_display_usb_port_2_0: [0, 1, 2][randomNumArray(3)],
    product_display_usb_port_3_0: [0, 1, 2][randomNumArray(3)],
    product_display_usb_port_3_1: [0, 1, 2][randomNumArray(3)],
    product_display_mini_display_port: [0, 1, 2][randomNumArray(3)],
    product_display_width: ['605 mm', '440 mm', '541 mm'][randomNumArray(3)],
    product_display_heigth: ['322 mm', '250 mm', '300 mm'][randomNumArray(3)],
    product_display_thickness: ['100 mm', '140 mm', '90 mm'][randomNumArray(3)],
    product_display_curvature: ['1500 r', '1800 r', '0'][randomNumArray(3)],
    product_display_maximum_consumption: ['70 W', '80 W', '100 W'][
      randomNumArray(3)
    ],
    product_display_font_type: ['Interna', 'Externa'][randomNumArray(2)],
    product_display_inches: ['21 "', '24 "', '27 "'][randomNumArray(3)],
    product_display_visible_inches: ['21 "', '24 "', '27 "'][randomNumArray(3)],
    product_display_maximum_resolution: ['1366x768', '1920x1080', '2560x1440'][
      randomNumArray(3)
    ],
    product_display_maximum_frequency: ['60 Hz', '144 Hz', '75 Hz'][
      randomNumArray(3)
    ],
    product_display_touch_screen: [true, false][randomNumArray(2)],
    product_display_number_of_speakers: [1, 2][randomNumArray(2)],
    product_display_smart_integrated: [true, false][randomNumArray(2)],
    product_display_detachable_foot: [true, false][randomNumArray(2)],
    product_display_weight_without_base: ['12.6 Kg', '14.1 Kg', '15.2 Kg'][
      randomNumArray(3)
    ],
    product_display_remote_control: [true, false][randomNumArray(2)],
    product_display_cables_included: ['HDMI', 'Display Port', 'USB-C'][
      randomNumArray(3)
    ],
  };
  return displayFeatures;
}

function generatePowerSourceRandomFeatures() {
  const powerSourceFeatures = {
    product_power_sources_watts_nominal: ['850 W', '450 W', '650 W'][
      randomNumArray(3)
    ],
    product_power_sources_real_watts: ['650 W', '450 W', '750 W'][
      randomNumArray(3)
    ],
    product_power_sources_format: 'ATX',
    product_power_sources_compatible_with_bottom_position: [true, false][
      randomNumArray(2)
    ],
    product_power_sources_80_plus_certification: [
      '80 PLUS Bronze',
      '80 PLUS Platinum',
      'Standar',
    ][randomNumArray(3)],
    product_power_sources_hybrid_mode: [true, false][randomNumArray(2)],
    product_power_sources_wiring_type: ['Cables fijos', 'Full modular'][
      randomNumArray(2)
    ],
    product_power_sources_line_amps_12V: ['71 A', '28 A', '55 A'][
      randomNumArray(3)
    ],
    product_power_sources_digital_source: [true, false][randomNumArray(2)],
    product_power_sources_color: ['Negro', 'Blanco'][randomNumArray(2)],
    product_power_sources_4_pin_cpu_connector: [1, 2][randomNumArray(2)],
    product_power_sources_4_pin_plus_cpu_connector: [1, 2][randomNumArray(2)],
    product_power_sources_24_pin_connector: [true, false][randomNumArray(2)],
    product_power_sources_6_pin_connector: [1, 2, 4][randomNumArray(3)],
    product_power_sources_2_pin_pcie_plus_connector: [1, 2, 4][
      randomNumArray(3)
    ],
    product_power_sources_sata_connections: [4, 5, 6][randomNumArray(3)],
    product_power_sources_molex_connections: [4, 5, 6][randomNumArray(3)],
    product_power_sources_floppy_connections: [0, 1][randomNumArray(2)],
    product_power_sources_includes_cable_a_220V: [true, false][
      randomNumArray(2)
    ],
  };
  return powerSourceFeatures;
}

function generateWebcamRandomFeature() {
  const webcamFeatures = {
    product_webcam_maximum_video_resolution: [
      '1920×1080',
      '1280×1024',
      '1440×900',
    ][randomNumArray(3)],
    product_webcam_video_max_resolution_type: ['HD', 'FULL HD', 'MAX HD'][
      randomNumArray(3)
    ],
    product_webcam_camera_image_resolution: [
      '1920×1080',
      '1280×1024',
      '1440×900',
    ][randomNumArray(3)],
    product_webcam_functions: ['Grabar', 'Grabar y fotografiar'][
      randomNumArray(2)
    ],
    product_webcam_max_frames_per_second: ['45 FPS', '55 FPS', '60 FPS'][
      randomNumArray(3)
    ],
    product_webcam_accessories_included: [
      'Tripode',
      'Sin accesorios',
      'Soporte monitor',
    ][randomNumArray(3)],
    product_webcam_cable_length: ['1.8 Mts', '2 Mts', '2.5 Mts'][
      randomNumArray(3)
    ],
    product_webcam_depth: ['66.5 mm', '76.5 mm', '70.5 mm'][randomNumArray(3)],
    product_webcam_width: ['40.4 mm', '42.8 mm', '50.4 mm'][randomNumArray(3)],
    product_webcam_heigth: ['20.4 mm', '26.8 mm', '31.4 mm'][randomNumArray(3)],
    product_webcam_weigth: ['10 gr', '5 gr', '12 gr'][randomNumArray(3)],
  };
  return webcamFeatures;
}

function generateMicrophoneRandomFeatures() {
  const microphoneFeatures = {
    product_microphone_color: ['Blanco', 'Negro'][randomNumArray(2)],
    product_microphone_microphone_formats: [
      'Omnidireccional',
      'Unidireccional',
      'Cardioide',
      'Bidireccional',
    ][randomNumArray(4)],
    product_microphone_microphone_types: ['Portatil', 'Fijo'][
      randomNumArray(2)
    ],
    product_microphone_with_power_light: [true, false][randomNumArray(2)],
    product_microphone_types_of_connections: ['USB', 'USB - Type C'][
      randomNumArray(2)
    ],
    product_microphone_input_connectors: ['3.5 mm', 'Sin conectores'][
      randomNumArray(2)
    ],
    product_microphone_output_connectors: ['3.5mm'][randomNumArray(1)],
    product_microphone_accessories_included: [
      'Brazo de microfono',
      'Tripode',
      'Sin accesorios',
    ][randomNumArray(3)],
  };
  return microphoneFeatures;
}

function generateCoolerRandomFeatures() {
  const coolerFeatures = {
    product_cooler_amount_of_fans: [1, 2, 3][randomNumArray(3)],
    product_cooler_maximum_speed: ['1600 rpm', '1500 rpm', '2000 rpm'][
      randomNumArray(3)
    ],
    product_cooler_size: ['80 mm', '92 mm', '120 mm'][randomNumArray(3)],
    product_cooler_thickness: ['25 mm', '27 mm', '30 mm'][randomNumArray(3)],
    product_cooler_consumption: ['3 W', '5 W', '4 W'][randomNumArray(3)],
    product_cooler_speed_controller: [true, false][randomNumArray(2)],
    product_cooler_lighting_with_led: [true, false][randomNumArray(2)],
    product_cooler_led_lights_color: ['Sin Iluminación', 'RGB', 'Rojo', 'Azul'][
      randomNumArray(4)
    ],
    product_cooler_rgb_connection_system: ['Molex', 'Pines'][randomNumArray(2)],
    product_cooler_includes_hub_with_rgb_controller: [true, false][
      randomNumArray(2)
    ],
  };
  return coolerFeatures;
}

function generateConsoleRandomFeatures() {
  const consoleFeatures = {
    product_console_color: ['Negro', 'Blanco'][randomNumArray(2)],
    product_console_capacity: ['250 Gb', '500 Gb', '1 Tb'][randomNumArray(3)],
    product_console_memory_types: ['SSD', 'M.2'][randomNumArray(2)],
    product_console_ram_memory: ['8 Gb', '10 Gb', '16 Gb'][randomNumArray(3)],
    product_console_with_wifi: [true, false][randomNumArray(2)],
    product_console_with_hdmi: [true, false][randomNumArray(2)],
    product_console_with_usb: [true, false][randomNumArray(2)],
    product_console_with_bluetooth: [true, false][randomNumArray(2)],
    product_console_weigth: ['3.9 Kg', '4.5 Kg', '3.2 Kg'][randomNumArray(3)],
    product_console_heigth: ['170 mm', '200 mm', '250 mm'][randomNumArray(3)],
    product_console_width: ['120 mm', '145 mm', '128 mm'][randomNumArray(3)],
    product_console_depth: ['240 mm', '290 mm', '345 mm'][randomNumArray(3)],
    product_console_max_amount_of_fps: ['60 FPS', '120 FPS'][randomNumArray(2)],
    product_console_accessories_included: ['Mando blanco', 'Mando negro'][
      randomNumArray(2)
    ],
    product_console_console_type: ['Sobremesa', 'Portatil'][randomNumArray(2)],
    product_console_controlls_connectivities: ['Inalambrica', 'Cableada'][
      randomNumArray(2)
    ],
    product_console_processor: ['Oberon', 'Oberon Plus', 'AMD Zen2'][
      randomNumArray(3)
    ],
    product_console_gpu: ['RDNA 2 52 CUs', 'RDNA 2 36 CUs'][randomNumArray(2)],
    product_console_processor_speed: ['3.8 GHz', '4.0 GHz', '3.6 GHz'][
      randomNumArray(3)
    ],
    product_console_number_of_cpu_cores: [4, 6, 8][randomNumArray(3)],
    product_console_with_touch_screen: [true, false][randomNumArray(2)],
    product_console_with_display: [true, false][randomNumArray(2)],
  };
  return consoleFeatures;
}

function generateNotebookRandomFeatures() {
  const notebookFeatures = {
    product_notebook_color: ['Gris Oscuro', 'Gris', 'Negro'][randomNumArray(3)],
    product_notebook_operating_system: [
      'Windows 11 Home',
      'Windows 10 Home',
      'Windows 11 Pro',
    ][randomNumArray(3)],
    product_notebook_cpu_type: ['Intel', 'AMD'][randomNumArray(2)],
    product_notebook_gpu_type: ['Nvidia GeForce', 'AMD'][randomNumArray(1)],
    product_notebook_removable_battery: [true, false][randomNumArray(2)],
    product_notebook_gpu_model: [
      'RTX 3060',
      'GTX 1650 Super',
      'GTX 1660',
      'RTX 2060',
    ][randomNumArray(4)],
    product_notebook_cpu_model: [
      'Ryzen 9 4900HS',
      'Core i7 11800H',
      'Core i7 1165-G7',
    ][randomNumArray(3)],
    product_notebook_type: ['Notebook', 'Laptop'][randomNumArray(2)],
    product_notebook_gpu_memory: ['2 Gb', '3 Gb', '4 Gb'][randomNumArray(3)],
    product_notebook_fingerprint_reader: [true, false][randomNumArray(2)],
    product_notebook_processor_family: [
      'Intel Core i7',
      'AMD Ryzen 7',
      'Intel Core i9',
    ][randomNumArray(3)],
    product_notebook_hdmi_ports: [0, 1][randomNumArray(2)],
    product_notebook_mini_hdmi_ports: [0, 1][randomNumArray(2)],
    product_notebook_mini_dp_port: [0, 1][randomNumArray(2)],
    product_notebook_usb_2_0_ports_type_a: [0, 1, 2][randomNumArray(3)],
    product_notebook_usb_3_0_ports_type_a: [0, 1, 2][randomNumArray(3)],
    product_notebook_usb_3_2_ports_type_a: [0, 1, 2][randomNumArray(3)],
    product_notebook_usb_3_2_type_c_ports: [0, 1, 2][randomNumArray(3)],
    product_notebook_bluetooth: [true, false][randomNumArray(2)],
    product_notebook_wifi: ['Norma AX'][randomNumArray(1)],
    product_notebook_ethernet_ports: [true, false][randomNumArray(2)],
    product_notebook_weigth: ['1.7 Kg', '2.3 Kg', '2.5 Kg'][randomNumArray(3)],
    product_notebook_width: ['32.4 cm', '30.1 cm', '35.6 cm'][
      randomNumArray(3)
    ],
    product_notebook_depth: ['22 cm', '31 cm', '26 cm'][randomNumArray(3)],
    product_notebook_heigth: ['1.99 cm', '1.23 cm', '2.34 cm'][
      randomNumArray(3)
    ],
    product_notebook_solid_capacity: ['1000 Gb', '500 Gb'][randomNumArray(2)],
    product_notebook_memory_reader: [true, false][randomNumArray(2)],
    product_notebook_screen_size: [
      '15.60 pulgadas',
      '19 pulgadas',
      '21.0 pulgadas',
    ][randomNumArray(3)],
    product_notebook_display_type: ['IPS', 'TN', 'VA'][randomNumArray(3)],
    product_notebook_resolution: ['1920x1080', '2560x1440'][randomNumArray(2)],
    product_notebook_touch: [true, false][randomNumArray(2)],
    product_notebook_update_frecuency: ['60 hz', '144 hz'][randomNumArray(2)],
    product_notebook_reader: ['Sin optico', 'DVD'][randomNumArray(2)],
    product_notebook_keyboard_ilumination: [true, false][randomNumArray(2)],
    product_notebook_numeric_pad: [true, false][randomNumArray(2)],
    product_notebook_webcam: [true, false][randomNumArray(2)],
    product_notebook_keyboard_backligth_color: ['Blanco', 'Rojo', 'RGB'][
      randomNumArray(3)
    ],
    product_notebook_slot_1_ram_available: [true, false][randomNumArray(2)],
    product_notebook_slot_2_ram_available: [true, false][randomNumArray(2)],
    product_notebook_ram_in_slot_1: ['8 Gb', '10 Gb', '16 Gb'][
      randomNumArray(3)
    ],
    product_notebook_ram_in_slot_2: ['8 Gb', '10 Gb', '16 Gb'][
      randomNumArray(3)
    ],
    product_notebook_memory_generation: ['DDR4', 'DDR3', 'DDR5'][
      randomNumArray(3)
    ],
    product_notebook_memory_format: ['LPDDR4X'][randomNumArray(1)],
  };
  return notebookFeatures;
}
function generateGpuRandomFeatures() {
  const gpuFeatures = {
    product_gpu_type: ['Pcie'][randomNumArray(1)],
    product_gpu_video_imput: [true, false][randomNumArray(2)],
    product_gpu_jumper_for_sli_croosfirex: [true, false][randomNumArray(2)],
    product_gpu_double_bridge: [true, false][randomNumArray(2)],
    product_gpu_vga: [0, 1][randomNumArray(2)],
    product_gpu_dvi_digital: [0, 1][randomNumArray(2)],
    product_gpu_hdmi: [1, 2][randomNumArray(2)],
    product_gpu_display_ports: [2, 3, 4][randomNumArray(3)],
    product_gpu_usb_type_c: [0, 1][randomNumArray(2)],
    product_gpu_plate_width: ['111 mm', '106 mm', '125 mm'][randomNumArray(3)],
    product_gpu_plate_length: ['215 mm', '239 mm', '255 mm'][randomNumArray(3)],
    product_gpu_plate_thickness: ['2.0 slots', '1.0 slots'][randomNumArray(2)],
    product_gpu_6_pin_pcie_quantity: [0, 1][randomNumArray(2)],
    product_gpu_consuption: ['120 W', '150 W', '180 W'][randomNumArray(3)],
    product_gpu_8_pin_pcie_quantity: [1, 2][randomNumArray(2)],
    product_gpu_recomended_total_watts: ['450 W', '500 W', '650 W'][
      randomNumArray(3)
    ],
    product_gpu_backplate: [true, false][randomNumArray(2)],
    product_gpu_block_vga_water_cooling: [true, false][randomNumArray(2)],
    product_gpu_amount_of_coolers_fan: [2, 3][randomNumArray(2)],
    product_gpu_memory_speed: ['8000 mhz', '19000 mhz', '19500 mhz'][
      randomNumArray(3)
    ],
    product_gpu_memory_type: ['GDDR6X', 'GDDR5X'][randomNumArray(2)],
    product_gpu_memory_capacity: ['6 Gb', '10 Gb', '8 Gb'][randomNumArray(3)],
    product_gpu_memory_interface: ['192 bits', '256 bits', '384 bits'][
      randomNumArray(3)
    ],
    product_gpu_core_turbo_speed: ['1695 mhz', '1785 mhz', '1770 mhz'][
      randomNumArray(3)
    ],
    product_gpu_process_types: ['CUDA'][randomNumArray(1)],
    product_gpu_number_of_processes: [10496, 1408, 6144][randomNumArray(3)],
  };
  return gpuFeatures;
}
function generateCabinetRandomFeatures() {
  const cabinetFeatures = {
    product_cabinet_factor_model: ['ITX', 'ATX', 'M-ATX'][randomNumArray(3)],
    product_cabinet_font_in_top_position: [true, false][randomNumArray(2)],
    product_cabinet_windowed: [true, false][randomNumArray(2)],
    product_cabinet_window_type: ['Vidrio templado', 'Policarbonato'][
      randomNumArray(2)
    ],
    product_cabinet_colors: ['Negro', 'Blanco'][randomNumArray(2)],
    product_cabinet_usb_2_0_front: [1, 2][randomNumArray(2)],
    product_cabinet_usb_3_0_front: [1, 2][randomNumArray(2)],
    product_cabinet_usb_type_c: [0, 1][randomNumArray(2)],
    product_cabinet_usb_type_c_internal: [0, 1, 2][randomNumArray(3)],
    product_cabinet_width: ['22.4 cm', '20.1 cm', '25.6 cm'][randomNumArray(3)],
    product_cabinet_heigth: ['32.4 cm', '30.1 cm', '35.6 cm'][
      randomNumArray(3)
    ],
    product_cabinet_depth: ['35.4 cm', '28.1 cm', '32.2 cm'][randomNumArray(3)],
    product_cabinet_5_25_drives_supported: [0, 1][randomNumArray(2)],
    product_cabinet_amount_of_slots: [6, 7, 8][randomNumArray(3)],
    product_cabinet_2_5_drives_supported: [0, 2, 3, 5][randomNumArray(3)],
    product_cabinet_3_5_drives_supported: [0, 2, 3, 5][randomNumArray(3)],
    product_cabinet_3_25_drives_supported: [0, 2, 3, 5][randomNumArray(3)],
    product_cabinet_supported_font_type: ['ITX', 'ATX', 'M-ATX'][
      randomNumArray(3)
    ],
    product_cabinet_supported_80mm_fan_coolers: [0, 1, 2, 3, 4, 5][
      randomNumArray(6)
    ],
    product_cabinet_80mm_fan_coolers_included: [0, 1, 2, 3, 4, 5][
      randomNumArray(6)
    ],
    product_cabinet_supported_120mm_fan_coolers: [0, 1, 2, 3, 4, 5][
      randomNumArray(6)
    ],
    product_cabinet_120mm_fan_coolers_included: [0, 1, 2, 3, 4, 5][
      randomNumArray(6)
    ],
    product_cabinet_supported_140mm_fan_coolers: [0, 1, 2, 3, 4, 5][
      randomNumArray(6)
    ],
    product_cabinet_140mm_fan_coolers_included: [0, 1, 2, 3, 4, 5][
      randomNumArray(6)
    ],
    product_cabinet_supported_200mm_fan_coolers: [0, 1, 2, 3, 4, 5][
      randomNumArray(6)
    ],
    product_cabinet_200mm_fan_coolers_included: [0, 1, 2, 3, 4, 5][
      randomNumArray(6)
    ],
    product_cabinet_radiator_support_240mm: [0, 1, 2, 3, 4, 5][
      randomNumArray(6)
    ],
    product_cabinet_radiator_support_280mm: [0, 1, 2, 3, 4, 5][
      randomNumArray(6)
    ],
    product_cabinet_space_for_radiator_water: [true, false][randomNumArray(2)],
    product_cabinet_radiator_support_360mm: [0, 1][randomNumArray(2)],
    product_cabinet_radiator_support_420mm: [0, 1][randomNumArray(2)],
    product_cabinet_lighting_controler: [true, false][randomNumArray(2)],
  };
  return cabinetFeatures;
}

export default function productsFeaturesSetter(products) {
  const productsWithFeatures = products.map((product) => {
    if (product.product_category === 'Procesadores') {
      const processorFeatures = generateProcessorRandomFeatures(
        product.product_brand
      );
      const newDataProcessor = { ...product, ...processorFeatures };
      return newDataProcessor;
    }
    if (product.product_category === 'Placas Madres') {
      const motherboardFeatures = generateMotherboardRandomFeatures(
        product.product_brand
      );
      const newDataMotherboard = { ...product, ...motherboardFeatures };
      return newDataMotherboard;
    }
    if (product.product_category === 'Teclados') {
      const keyboardFeatures = generateKeyboardRandomFeatures();
      const newDataKeyboard = { ...product, ...keyboardFeatures };
      return newDataKeyboard;
    }
    if (product.product_category === 'Auriculares') {
      const earphoneFeatures = generateEarphoneRandomFeatures();
      const newDataEarphone = { ...product, ...earphoneFeatures };
      return newDataEarphone;
    }
    if (product.product_category === 'Mouses') {
      const mouseFeatures = generateMouseRandomFeatures();
      const newDataMouse = { ...product, ...mouseFeatures };
      return newDataMouse;
    }
    if (product.product_category === 'Almacenamiento') {
      const diskFeatures = generateDiskRandomFeatures();
      const newDataDisk = { ...product, ...diskFeatures };
      return newDataDisk;
    }
    if (product.product_category === 'Memorias RAM') {
      const ramFeatures = generateRamRandomFeatures();
      const newDataRam = { ...product, ...ramFeatures };
      return newDataRam;
    }
    if (product.product_category === 'Monitores') {
      const displayFeatures = generateDisplayRandomFeatures();
      const newDataDisplay = { ...product, ...displayFeatures };
      return newDataDisplay;
    }
    if (product.product_category === 'Fuentes de Poder') {
      const powerSourceFeatures = generatePowerSourceRandomFeatures();
      const newDataPowerSource = { ...product, ...powerSourceFeatures };
      return newDataPowerSource;
    }
    if (product.product_category === 'Camaras') {
      const webcamFeatures = generateWebcamRandomFeature();
      const newDataWebcam = { ...product, ...webcamFeatures };
      return newDataWebcam;
    }

    if (product.product_category === 'Microfonos') {
      const microphoneFeatures = generateMicrophoneRandomFeatures();
      const newDataMicrophone = { ...product, ...microphoneFeatures };
      return newDataMicrophone;
    }

    if (product.product_category === 'Cooler Fan') {
      const coolerFeatures = generateCoolerRandomFeatures();
      const newDataCooler = { ...product, ...coolerFeatures };
      return newDataCooler;
    }

    if (product.product_category === 'Consolas') {
      const consoleFeatures = generateConsoleRandomFeatures();
      const newDataConsole = { ...product, ...consoleFeatures };
      return newDataConsole;
    }

    if (product.product_category === 'Notebooks') {
      const notebookFeatures = generateNotebookRandomFeatures();
      const newDataNotebook = { ...product, ...notebookFeatures };
      return newDataNotebook;
    }

    if (product.product_category === 'Gabinetes') {
      const cabinetFeatures = generateCabinetRandomFeatures();
      const newDataCabinet = { ...product, ...cabinetFeatures };
      return newDataCabinet;
    }

    if (product.product_category === 'GPU') {
      const gpuFeatures = generateGpuRandomFeatures();
      const newDataGpu = { ...product, ...gpuFeatures };
      return newDataGpu;
    }

    return { ...product };
  });
  return productsWithFeatures;
}
