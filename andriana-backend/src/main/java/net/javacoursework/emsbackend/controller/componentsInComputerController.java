package net.javacoursework.emsbackend.controller;
import lombok.AllArgsConstructor;
import net.javacoursework.emsbackend.dto.componentsInComputerDto;
import net.javacoursework.emsbackend.service.componentsInComputerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/componentsInComputer")
public class componentsInComputerController {

    private componentsInComputerService computerService;

    // Build Add desktopComputer REST API
    @PostMapping
    public ResponseEntity<componentsInComputerDto> createComputer(@RequestBody componentsInComputerDto computersDto){
        componentsInComputerDto savedComputer = computerService.createComputer(computersDto);
        return new ResponseEntity<>(savedComputer, HttpStatus.CREATED);
    }

    // Build Get desktopComputer REST API
    @GetMapping("{id}")
    public ResponseEntity<componentsInComputerDto> getComputerById(@PathVariable("id") Long computerId){
        componentsInComputerDto computerDto = computerService.getComputerById(computerId);
        return ResponseEntity.ok(computerDto);

    }

    // Build Get All desktopComputer REST API
    @GetMapping
    public ResponseEntity<List<componentsInComputerDto>> getAllComputers(){
        List<componentsInComputerDto> computers = computerService.getAllComputers();
        return ResponseEntity.ok(computers);
    }

    // Build Update desktopComputer REST API

    @PutMapping("{id}")
    public ResponseEntity<componentsInComputerDto> updateComputer(@PathVariable("id") Long computerId,
                                                                  @RequestBody componentsInComputerDto updatedComputer){
        componentsInComputerDto computerDto = computerService.updateComputer(computerId, updatedComputer);
        return ResponseEntity.ok(computerDto);

    }

    // Build Delete desktopComputer REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteComputer(@PathVariable("id") Long computerId){
        computerService.deleteComputer(computerId);
        return ResponseEntity.ok("Component in computer deleted successfully!");
    }

}
